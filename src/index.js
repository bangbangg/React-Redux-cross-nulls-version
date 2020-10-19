import React from 'react';
import App from './App';
import {createStore} from 'redux';
import * as serviceWorker from './serviceWorker';
import './Styles/styles.css';
import {Provider} from 'react-redux';
import {render} from 'react-dom';

import {rootReducer} from './Reducers/RootReducer'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : [];

const store = createStore(rootReducer, persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
});


const app = (
  <Provider store = {store}>
    <App />
  </Provider>
)
render(app ,document.getElementById('root'));



serviceWorker.unregister();
