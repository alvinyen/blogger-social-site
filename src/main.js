import ReactDOM from 'react-dom';
import React from 'react';
import App from './containers/App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { renderRoute } from './routes/rootRoute';

ReactDOM.render(
    renderRoute() 
    , document.getElementById("app"));