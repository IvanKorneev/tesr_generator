import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/app";
import ErrorBoundry from "./component/error-boundry";
import {BrowserRouter as Router} from 'react-router-dom';


ReactDOM.render(
    <ErrorBoundry>
        <Router>
            <App/>
        </Router>
    </ErrorBoundry>
    , document.getElementById('root')
);
