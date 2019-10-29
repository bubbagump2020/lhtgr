import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
// import store from './store'
import  Login from './components/Login'
import DungeonMasterPage from './components/DungeonMasterPage'


function App() {
  return (
    <div>
      <BrowserRouter>
        < Route exact path="/" component={Login} />
        < Route exact path="/dungeon_masters" component={DungeonMasterPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
