import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Login } from './components/Login'
import DungeonMasterPage from './components/DungeonMaster/DungeonMasterPage'
import PlayerPage from './components/Player/PlayerPage'
import PlayerForm from './components/Player/PlayerForm'
import CampaignForm from './components/Campaign/CampaignForm'


function App() {
  return (
    <div>
      <BrowserRouter>
        < Route exact path="/" component={Login} />
        < Route exact path="/dungeon_masters/:id" component={DungeonMasterPage} />
        {/* < Route exact path="/players/:id" component={PlayerPage} />
        < Route exact path="/players/new" component={PlayerForm} />
        < Route exact path="/campaigns/new" component={CampaignForm} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
