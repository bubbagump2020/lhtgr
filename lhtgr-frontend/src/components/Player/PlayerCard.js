import React from 'react'
import { Card, Header } from 'semantic-ui-react';

class PlayerCard extends React.Component {
    render(){
        return(
            <Card>
                <Card.Header as="h3">This is a PlayerCard Component</Card.Header>
            </Card>
        )
    }
}

export default PlayerCard