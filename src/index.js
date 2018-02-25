import React from 'react';
import { render } from 'react-dom';

// SO: redux hell starts here:
import {
    createStore, combineReducers,
    compose, applyMiddleware
} from "redux";
import { Provider } from "react-redux";
import { sessionService, sessionReducer } from "redux-react-session";
import thunkMiddleware from "redux-thunk";

import { BrowserRouter, } from 'react-router-dom'

import App from './App';

const reducer = combineReducers({
    session: sessionReducer,
});

const store = createStore(reducer, undefined, compose(applyMiddleware(thunkMiddleware)));

sessionService.initSessionService(store);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);