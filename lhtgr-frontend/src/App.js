import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
// import store from './store'
import Login from './components/Login'


function App() {
  return (
    <div>
      <BrowserRouter>
        < Route exact path="" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
