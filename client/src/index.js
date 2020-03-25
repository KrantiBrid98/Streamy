import React from "react";
import ReactDOM from 'react-dom'
import App from './Component/App.js'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './Reducer'
import reduxThunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
var store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(reduxThunk))
)

ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)

// for debug sessions on redux dev tools, localhost:3000/?debug_session=<string>