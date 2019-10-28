import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './components/Login'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </div>
  );
}

export default App;
