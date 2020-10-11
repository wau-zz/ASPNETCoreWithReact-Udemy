import { observable, action, makeObservable } from 'mobx';
import { createContext } from 'react';
import { IActivity } from '../models/activity';
import agent from '../api/agent';

class ActivityStore {
    @observable activities: IActivity[] = [];
    @observable selectedActivity: IActivity | undefined;
    @observable loadingInitial = false;
    @observable editMode = false;

    constructor() {
        makeObservable(this)
    }

    @action loadActivities = () => {
        this.loadingInitial = true;
        agent.Activities.list()
        .then(activities => {
            
            activities.forEach((activity) => {
            activity.date = activity.date.split('.')[0];
            this.activities.push(activity);
            })
            
        }).finally(() => this.loadingInitial = false);
    }

    @action selectActivity = (id: string) => {
        this.selectedActivity = this.activities.find(a => a.id === id);

    }
}

export default createContext(new ActivityStore())