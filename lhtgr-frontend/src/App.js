import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './components/Login'
import DungeonMasterPage from './components/DungeonMaster/DungeonMasterPage'
import PlayerPage from './components/Player/PlayerPage'
import PlayerForm from './components/Player/PlayerForm'
import CampaignForm from './components/Campaign/CampaignForm'
import { connect } from 'react-redux'
import { campaignArray } from './redux/actions'

const MapStateToProps = state => {
  return { campaigns: state.campaigns}
}

function MapDispatchToProps(dispatch){
  return{
    campaignArray: campaign => dispatch(campaignArray(campaign))
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
  }

  dispatchCampaigns = (campaigns) => {
    this.props.campaignArray({ campaigns })
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
