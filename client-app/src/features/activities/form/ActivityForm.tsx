

import React, {useContext, useState, FormEvent} from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IActivity } from '../../../app/models/activity';
import { v4 as uuid} from 'uuid';
import ActivityStore from '../../../app/stores/activityStore';
import { observer } from 'mobx-react-lite';

interface IProps {
    activity: IActivity; 
}

export const ActivityForm: React.FC<IProps> = ({
    activity: initialFormState,
    
}) => {
    const activityStore = useContext(ActivityStore);
    const {createActivity, editActivity, submitting, cancelFormOpen} = activityStore;
    const initializeForm = () => {
        if (initialFormState) {
            return initialFormState;
        }
        else {
            return {
                id: '',
                title: '',
                category: '',
                description: '',
                date: '',
                city: '',
                venue: ''
            }
        }
    };

    const [activity, setActivity] = useState<IActivity>(initializeForm)

    const handleSubmit = () => {
        console.log(activity);

        if (activity.id.length === 0) {
            let newActivity = {
                ...activity, 
                id: uuid()
            }
            createActivity(newActivity);
        }
        else {
            editActivity(activity);

        }
        
    }


    const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        // console.log(event.target.name + ' ' + event.target.value);
        const {name, value} = event.currentTarget;
        setActivity({...activity, [name]: value})
    }

    return (
        <Segment>
            <Form onSubmit={handleSubmit}>
                <Form.Input onChange={handleInputChange} name='title' placeholder='Title' value={activity.title} />
                <Form.TextArea onChange={handleInputChange} name='description' rows={2} placeholder='Description' value={activity.description} />
                <Form.Input onChange={handleInputChange} name='category' placeholder='Category' value={activity.category} />
                <Form.Input onChange={handleInputChange} name='date' type='datetime-local' placeholder='Date' value={activity.date} />
                <Form.Input onChange={handleInputChange} name='city' placeholder='City' value={activity.city} />
                <Form.Input onChange={handleInputChange} name='venue' placeholder='Venue' value={activity.venue} />
                <Button floated='right' loading={submitting} positive type='submit' content='Submit' />
                <Button onClick={cancelFormOpen} floated='right' type='button' content='Cancel' />

            </Form>


        </Segment>

    )
}

export default observer(ActivityForm);