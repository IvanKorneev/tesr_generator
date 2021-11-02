import React from 'react';
import ReactDOM from 'react-dom';
import App from "./component/app";
import ErrorBoundry from "./component/error-boundry";


ReactDOM.render(
    <ErrorBoundry>
        <App/>
    </ErrorBoundry>
    , document.getElementById('root')
);
