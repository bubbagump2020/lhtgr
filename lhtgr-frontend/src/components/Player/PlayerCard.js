import React from 'react'
import { Card, CardGroup, Container } from 'react-bootstrap';

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
                        <Container key={player.id} fluid>
                            <Card className="text-center">
                                <Card.Header>{player.username}</Card.Header>
                                <Card.Body>
                                    player information
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
            {createPlayerCards()}
        </CardGroup>
    )
}