import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react'

class CampaignForm extends React.Component{

    render(){
        return(
            <Form>
                <Header as="h3">Campaign Creation</Header>
                <Form.Field>
                    <label>Campaign Name</label>
                    <input placeholder="Campaign Name" />
                </Form.Field>
                <Button type="submit">Create Campaign</Button>
            </Form>
        )
    }

}

export default CampaignForm;