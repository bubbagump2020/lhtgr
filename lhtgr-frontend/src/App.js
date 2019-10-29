import React from 'react';
// import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
// import store from './store'
import  { Login } from './components/Login'
import DungeonMasterPage from './components/DungeonMasterPage'
import PlayerPage from './components/PlayerPage'


function App() {
  console.log("hello!")
  return (
    <div>
      <BrowserRouter>
        < Route exact path="/" component={Login} />
        < Route exact path="/dungeon_masters/:id" component={DungeonMasterPage} />
        < Route exact path="/players/:id" component={PlayerPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
