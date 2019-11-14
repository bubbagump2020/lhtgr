import React from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap'

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
                    <Container key={campaign.id} fluid>
                        <Card className="text-center">
                            <Card.Header>{campaign.name}</Card.Header>
                            <Card.Body>
                                Campaign info here
                            </Card.Body>
                        </Card>
                    </Container>
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