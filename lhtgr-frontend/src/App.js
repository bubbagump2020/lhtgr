import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './components/Login'
import DungeonMasterPage from './components/DungeonMaster/DungeonMasterPage'
import PlayerPage from './components/Player/PlayerPage'
import PlayerForm from './components/Player/PlayerForm'
import CampaignForm from './components/Campaign/CampaignForm'
import { connect } from 'react-redux'
import { campaignArray, characterArray, playerArray } from './redux/actions'

const MapStateToProps = state => {
  return { campaigns: state.campaigns,
           characters: state.characters,
           players: state.players
  }
}

function MapDispatchToProps(dispatch){
  return{
    campaignArray: campaign => dispatch(campaignArray(campaign)),
    characterArray: character => dispatch(characterArray(character)),
    playerArray: player => dispatch(playerArray(player))
  }
}


class ConnectedApp extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount = () =>{
    fetch('http://localhost:3001/campaigns')
      .then(response => response.json())
      .then(campaigns => this.dispatchCampaigns(campaigns))
    fetch('http://localhost:3001/characters')
      .then(response => response.json())
      .then(characters => this.dispatchCharacters(characters))
    fetch('http://localhost:3001/players')
      .then(response => response.json())
      .then(players => this.dispatchPlayers(players))
  }

  dispatchCampaigns = (campaigns) => {
    this.props.campaignArray({ campaigns })
  }

  dispatchCharacters = (characters) => {
    this.props.characterArray({ characters })
  }

  dispatchPlayers = (players) => {
    this.props.playerArray({ players })
  }

  render(){
    return (
      <div>
        <BrowserRouter>
          < Route exact path="/" component={Login} />
          < Route exact path="/dungeon_masters/:id" component={DungeonMasterPage} />
          < Route exact path="/players/:id" component={PlayerPage} />
          < Route exact path="/players/new" component={PlayerForm} />
          < Route exact path="/campaigns/new" component={CampaignForm} />
        </BrowserRouter>
      </div>
    );
  }
  
}

const App = connect(MapStateToProps, MapDispatchToProps)(ConnectedApp)

export default App;
