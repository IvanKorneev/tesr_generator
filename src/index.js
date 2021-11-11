import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/app";
import ErrorBoundry from "./component/error-boundry";
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store/store";


ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <Router>
                <App/>
            </Router>
        </ErrorBoundry>
    </Provider>
    , document.getElementById('root')
);
