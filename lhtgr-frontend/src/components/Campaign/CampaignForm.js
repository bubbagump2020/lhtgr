import React from 'react';
import { Form, Header, Button } from 'semantic-ui-react'

class CampaignForm extends React.Component{

    constructor(){
        super()
        this.state = {
            name: ''
        }
    }

    campaignName = (e) => {
        e.preventDefault()
        this.setState({
            name: e.target.value
        })
    }

    createCampaign = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/campaigns', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dungeon_master_id: document.cookie,
                name: this.state.name,
            })
        }).then(response => response.json())
    }

    render(){
        console.log()
        return(
            <Form onSubmit={e => this.createCampaign(e)}>
                <Header as="h3">Campaign Creation</Header>
                <Form.Field>
                    <label>Campaign Name</label>
                    <input placeholder="Campaign Name" type="text" onChange={e => this.campaignName(e)}/>
                </Form.Field>
                <Button type="submit">Create Campaign</Button>
            </Form>
        )
    }

}

export default CampaignForm;