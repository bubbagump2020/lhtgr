import React from 'react'
import { Card, Header } from 'semantic-ui-react';

class PlayerCard extends React.Component {

    displayPlayerCards = () => {
        return this.props.players.map(player => {
            return(
                <Card key={player.id}>
                    <Card.Content>
                        <Card.Header>{player.username}</Card.Header>
                    </Card.Content>
                </Card>
            )
        })
    }

    render(){
        return(
            <Card.Group>
                {this.displayPlayerCards()}
            </Card.Group>
        )
    }
}

export default PlayerCard