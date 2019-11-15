import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router";
import * as serviceWorker from './serviceWorker';
import App from './App';

const router = (
    <Router>
        <Switch>
            <Route path="/" component={App} />
        </Switch>
    </Router>
);


ReactDOM.render(router, document.getElementById('root'));
serviceWorker.unregister();