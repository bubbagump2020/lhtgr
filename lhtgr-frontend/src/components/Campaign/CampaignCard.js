import React from 'react'
import { Card, Header } from 'semantic-ui-react'

class CampaignCard extends React.Component{

    displayCampaignCards = () => {
        return this.props.campaigns.map(campaign => {
            return(
                <Card key={campaign.id} style={{backgroundColor: "#cc6600"}}>
                    <Card.Content>
                        <Card.Header>{campaign.name}</Card.Header>
                    </Card.Content>
                </Card>
            )
        })
    }

    render(){
        return(
            <Card.Group>
                {this.displayCampaignCards()}
            </Card.Group>
        )
    }
}

export default CampaignCard