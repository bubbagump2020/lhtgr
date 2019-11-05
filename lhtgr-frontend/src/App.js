import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './components/Login'
import DungeonMasterPage from './components/DungeonMaster/DungeonMasterPage'
import PlayerPage from './components/Player/PlayerPage'
import PlayerForm from './components/Player/PlayerForm'
import CampaignForm from './components/Campaign/CampaignForm'
import CharacterForm from './components/Character/CharacterForm'


class App extends React.Component {
  

  render(){
    return (
      <div>
        <BrowserRouter>
          < Route exact path="/" component={Login} />
          < Route exact path="/dungeon_masters/:id" component={DungeonMasterPage} />
          < Route exact path="/players/:id" component={PlayerPage} />
          < Route exact path="/players/new" component={PlayerForm} />
          < Route exact path="/campaigns/new" component={CampaignForm} />
          < Route exact path="/characters/new" component={CharacterForm} />
        </BrowserRouter>
      </div>
    );
  }
  
}

export default App;
