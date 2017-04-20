import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './../containers/App.jsx';
import Signup from './../components/Signup.jsx';
import Login from './../components/Login.jsx';
import Test from './../components/Test.jsx' ;

const rootRoute = (
    <Route path="/" component={App}>
        <IndexRoute component={Signup} />
        <Route path="signup" component={Signup}/>
        <Route path="login" component={Login}/>
    </Route>
);

export default rootRoute;