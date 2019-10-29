import React from 'react';
import { Segment, Header, Container, Card } from 'semantic-ui-react';
import PlayerCard from '../Player/PlayerCard'
import { Route, Link } from 'react-router-dom'
import PlayerForm from '../Player/PlayerForm'

class DungeonMasterPage extends React.Component {
    render(){
        console.log("this is the dungeonmaster page")
        return(
            <Container fluid>
                <Segment textAlign="center">
                    <Header as="h1">Welcome Back Dungeon Master</Header>
                    <Link to="/players/new">Create a Player</Link>
                </Segment>
                <Card.Group align="left">
                    <PlayerCard />
                </Card.Group>
            </Container>
        )
    }
}

export default DungeonMasterPage;