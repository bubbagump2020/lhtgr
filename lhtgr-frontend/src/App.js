import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './components/Login'
import DungeonMasterPage from './components/DungeonMaster/DungeonMasterPage'
import PlayerPage from './components/Player/PlayerPage'
import PlayerForm from './components/Player/PlayerForm'
import CampaignForm from './components/Campaign/CampaignForm'
import CharacterForm from './components/Character/CharacterFormNew'
import { EditCharacter } from './components/Character/CharacterFormEdit'
import { Container } from 'react-bootstrap'
import './App.css'



class App extends React.Component {
  

  render(){
    return (
        <BrowserRouter>
          < Route exact path="/" component={Login} />
          < Route exact path="/dungeon_masters/:id" component={DungeonMasterPage} />
          < Route exact path="/players/:id" component={PlayerPage} />
          < Route exact path="/players/new" component={PlayerForm} />
          < Route exact path="//players/:id/campaigns/new" component={CampaignForm} />
          < Route exact path="/characters/new" component={CharacterForm} />
          < Route exact path="/characters/edit" component={EditCharacter} />
        </BrowserRouter>
    );
  }
  
}

export default App;
