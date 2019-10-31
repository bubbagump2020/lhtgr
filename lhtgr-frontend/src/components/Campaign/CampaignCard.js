import React from 'react'
import { Card } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

export function CampaignCard(){
    const result = useSelector(state => state)

    if(result === undefined){
        return(
            <div>
                Loading
            </div>
        )
    } else {
        if(result.campaigns.campaigns !== undefined){
            return result.campaigns.campaigns.map(campaign => {
                return(
                    <Card key={campaign.id} style={{backgroundColor: "#cc6600"}}>
                        <Card.Content>
                            <Card.Header>{campaign.name}</Card.Header>
                        </Card.Content>
                    </Card>
                )
            })
        }
    }

    return(
        <Card.Group />
    )
}