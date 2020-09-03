

import React from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

export const ActivityForm = () => {
    return (
        <Segment>
            <Form>
                <Form.Input placeholder='Title' />
                <Form.TextArea rows={2} placeholder='Description' />
                <Form.Input placeholder='Category' />
                <Form.Input type='date' placeholder='Date' />
                <Form.Input placeholder='City' />
                <Form.Input placeholder='Venue' />
                <Button floated='right' positive type='submit' content='Submit' />
                <Button floated='right' type='button' content='Cancel' />

            </Form>


        </Segment>

    )
}

export default ActivityForm;