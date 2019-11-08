import React from 'react'
import { Card, CardGroup } from 'react-bootstrap'

export function CampaignCard(props){
    const campaigns = props.campaigns
    

    const createCampaignCards = () => {
        if(campaigns.length === 0){
        return(
            <div>
                Loading
            </div>
        )
    } else {
        if(campaigns !== undefined){
            return campaigns.map(campaign => {
                return(
                    <Card key={campaign.id}>
                        <Card.Header>{campaign.name}</Card.Header>
                        <Card.Body>
                            Campaign info here
                        </Card.Body>
                    </Card>
                )
            })
        }
    }
    }

    return(
        <CardGroup>
            {createCampaignCards()}
        </CardGroup>
    )
}