import React from 'react';
import { Segment, Header, Container, Card, Menu, Accordion } from 'semantic-ui-react';
import { Logout } from '../Logout'
import { PlayerCard } from '../Player/PlayerCard'
import { Link } from 'react-router-dom'
import PlayerForm from '../Player/PlayerForm'
import { CampaignCard } from '../Campaign/CampaignCard'
import { connect } from 'react-redux'
import { createPlayer, playerArray, campaignArray } from '../../redux/actions/index'

function mapDispatchToProps(dispatch){
    return{
        createPlayer: (playerName, playerPassword) => dispatch(createPlayer(playerName, playerPassword)),
        playerArray: player => dispatch(playerArray(player)),
        campaignArray: campaign => dispatch(campaignArray(campaign))
    }
}


class ConnectedDungeonMasterPage extends React.Component {

    constructor(){
        super()
        this.state = {
            playerName: '',
            playerPassword: ''
        }
    }
    
    componentDidMount = ()=>{
        fetch('http://localhost:3001/players')
            .then(response => response.json())
            .then(players => this.dispatchPlayers(players))
        fetch('http://localhost:3001/campaigns')
            .then(response => response.json())
            .then(campaigns => this.dispatchCampaigns(campaigns))
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

    dispatchPlayers = (players) => {
        this.props.playerArray({ players })
    }

    dispatchCampaigns = (campaigns) => {
        this.props.campaignArray({ campaigns })
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
        return(
            <Container fluid>
                <Menu>
                    <Menu.Item header>Welcome Back Dungeon Master</Menu.Item>
                    <Menu.Item>
                        <Link to="/campaigns/new">Create a Campaign</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to="/"><Logout/></Link>
                    </Menu.Item>
                </Menu>
                <Menu vertical>
                    <Menu.Item>
                        <PlayerForm
                        playerCreation={e => this.handlePlayerCreation(e)}
                        playerName={e => this.handleFormNameInput(e)}
                        playerPassword={e => this.handleFormPasswordInput(e)}
                        />
                    </Menu.Item>
                    <Menu.Item>
                        <Card.Group align="left">
                            <PlayerCard />
                        </Card.Group>
                    </Menu.Item>
                    <Menu.Item align="left">
                    <Card.Group>
                            <CampaignCard />
                        </Card.Group>
                    </Menu.Item>
                </Menu>
            </Container>
        )
    }
}

const DungeonMasterPage = connect(null, mapDispatchToProps)(ConnectedDungeonMasterPage)

export default DungeonMasterPage;