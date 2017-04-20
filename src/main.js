import ReactDOM from 'react-dom';
import React from 'react';
// import Test from './components/Test.jsx' ;
import App from './containers/App.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import { Router, browserHistory } from 'react-router';
import rootRoute from './routes/rootRoute' ;

ReactDOM.render(
    <div>
        <Router history={browserHistory}>
            {rootRoute}
        </Router>
     </div>
    , document.getElementById("app"));