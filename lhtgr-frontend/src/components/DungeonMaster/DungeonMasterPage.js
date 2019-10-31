import React from 'react';
import { Segment, Header, Container, Card, Form, Grid, Button } from 'semantic-ui-react';
import PlayerCard from '../Player/PlayerCard'
import { Link } from 'react-router-dom'
import PlayerForm from '../Player/PlayerForm'
import CampaignCard from '../Campaign/CampaignCard'
import { connect } from 'react-redux'
import { createPlayer } from '../../redux/actions/index'


function mapDispatchToProps(dispatch){
    return{
        createPlayer: playerName => dispatch(createPlayer(playerName)),
        createPlayer: playerPassword => dispatch(createPlayer(playerPassword))
    }
}


class ConnectedDungeonMasterPage extends React.Component {

    
    constructor(){
        super()
        this.state = {
            players: [],
            campaigns: [],
            playerName: '',
            playerPassword: ''
        }
    }
    
    componentDidMount = ()=>{
        fetch('http://localhost:3001/players')
            .then(response => response.json())
            .then(players => this.setState({ players: players }))
        fetch('http://localhost:3001/campaigns')
            .then(response => response.json())
            .then(campaigns => this.setState({ campaigns: campaigns }))
    }

    handleFormNameInput = (e) => {
        this.setState({
            playerName: e.target.value,
        })
    }

    handleFormPasswordInput = (e) => {
        this.setState({
            playerPassword: e.target.value
        })
    }

    handlePlayerCreation = (e) => {
        const { playerName, playerPassword } = this.state
        this.props.createPlayer({ playerName, playerPassword })
        e.preventDefault()
        this.setState({ playerName: '', playerPassword: '' })
        fetch('http://localhost:3001/players',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                dungeon_master_id: document.cookie,
                username: this.state.playerName,
                password: this.state.playerPassword
            })
        }).then(response => response.json())
          .then(data => console.log(data))
    }



    render(){
        console.log(document.cookie)
        return(
            <Container fluid>
                <Segment textAlign="center">
                    <Header as="h1">Welcome Back Dungeon Master</Header>
                    <Link to="/players/new">Create a Player</Link><br></br>
                    <Link to="/campaigns/new">Create a Campaign</Link>
                </Segment>
                <Segment>
                    <Card.Group align="left">
                        <PlayerCard players={this.state.players} />
                    </Card.Group>
                </Segment>
                <Segment>
                    <Card.Group>
                        <CampaignCard campaigns={this.state.campaigns} />
                    </Card.Group>
                </Segment>
                <Segment>
                    <PlayerForm
                    playerCreation={e => this.handlePlayerCreation(e)}
                    playerName={e => this.handleFormNameInput(e)}
                    playerPassword={e => this.handleFormPasswordInput(e)}
                    />
                </Segment>
            </Container>
        )
    }
}

const DungeonMasterPage = connect(null, mapDispatchToProps)(ConnectedDungeonMasterPage)

export default DungeonMasterPage;