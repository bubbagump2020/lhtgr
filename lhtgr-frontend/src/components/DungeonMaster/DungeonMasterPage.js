import React from 'react';
import { Segment, Header, Container, Card, Form, Grid, Button } from 'semantic-ui-react';
import PlayerCard from '../Player/PlayerCard'
import { Route, Link } from 'react-router-dom'
import PlayerForm from '../Player/PlayerForm'
import CampaignForm from '../Campaign/CampaignForm'
import { useSelector } from 'react-redux'



class DungeonMasterPage extends React.Component {

    
    constructor(){
        super()
        this.state = {
            players: []
        }
    }
    
    componentDidMount = ()=>{
        fetch('http://localhost:3001/players')
            .then(response => response.json())
            .then(players => this.setState({ players: players }))
    }

    handlePlayerCreation = (e) => {
        e.preventDefault()
        fetch('http://localhost:3001/players',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
            })
        }).then(response => response.json())
          .then(data => console.log(data))
    }



    render(){
        
        return(
            <Container fluid>
                <Segment textAlign="center">
                    <Header as="h1">Welcome Back Dungeon Master</Header>
                    <Link to="/players/new">Create a Player</Link><br></br>
                    <Link to="/campaigns/new">Create a Campaign</Link>
                </Segment>
                <Card.Group align="left">
                    <PlayerCard players={this.state.players} />
                </Card.Group>
            </Container>
        )
    }
}

export default DungeonMasterPage;