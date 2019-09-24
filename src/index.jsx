// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

// internal modules
import App from './components/App';
import hitsReducer from './reducers/hitsReducer';
import filterReducer from './reducers/filterReducer';
import '../assets/stylesheets/application.scss';

const initialState = {
    filter: 'SHOW_DEAD',
    hits: [
        { id: 1, name: 'Taylor Swift', done: false },
        { id: 2, name: 'Rebecca Black', done: false },
        { id: 3, name: 'Hot Psycho', done: false }
    ]
};


// State and reducers
const reducers = combineReducers({
    hits: hitsReducer,
    filter: filterReducer,
});

// render an instance of the component in the DOM
ReactDOM.render(
    <Provider store={createStore(reducers, initialState)}>
        <App />
    </Provider>,
    document.getElementById('root')
);
