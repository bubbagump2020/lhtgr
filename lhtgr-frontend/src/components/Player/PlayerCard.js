import React from 'react'
import { Card } from 'semantic-ui-react';
import { useSelector } from 'react-redux'

export function PlayerCard() {
    const result = useSelector(state => state)
    
    if(result === undefined){
        return(
            <di>Loading</di>
        )
    } else {
        if(result.players.players !== undefined){
            return result.players.players.map(player => {
                return(
                    <Card key = {player.id} style={{backgroundColor: "#cc6600"}}>
                        <Card.Content>
                            <Card.Header>{player.username}</Card.Header>
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