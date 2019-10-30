import React from 'react';
import ReactDOM from 'react-dom';

import { Provider, useSelector } from 'react-redux';
import { createStore } from 'redux';

import store from './redux/store/index';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// const reducer = (state, action) => {
//     switch(action.type){
//         case 'HELLO':
//             return { ...state, message: "HELLO WORLD! I AM THE DESTROYER OF WORLDS"}
//         break;
//     }
//     return state
// }

// const initialState = {
//     username: 'admin',
//     password: 'password'
// }

// const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// store.dispatch( { type: 'HELLO' } )


ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
