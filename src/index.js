import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import store from './store'
import history from './history'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
        
    </Provider>
    ), document.getElementById('root'));

