import React from 'react'
import { Card, CardGroup } from 'react-bootstrap';

export function PlayerCard(props) {
    const players = props.players
    
    const createPlayerCards = () => {
        if(players.length === 0){
            return(
                <div>Loading</div>
            )
        } else {
            if(players.length !== 0){
                return players.map(player => {
                    return(
                        <Card key = {player.id} className="text-center">
                            <Card.Header>{player.username}</Card.Header>
                            <Card.Body>
                                Player Info Here
                            </Card.Body>
                        </Card>
                    )
                })
            }
        }
    }

    return(
        <CardGroup>
            {createPlayerCards()}
        </CardGroup>
    )
}