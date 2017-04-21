import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './../containers/App.jsx';
import Signup from './../components/Signup.jsx';
import Login from './../components/Login.jsx';
import Test from './../components/Test.jsx';
import { Provider } from 'react-redux';
import store from './../redux/store' ;
import { setCurrentUser } from './../redux/actions/authActions' ;

if(sessionStorage.jwtToken){
    const user = JSON.parse(sessionStorage.user);
    store.dispatch(setCurrentUser(user));
}

export const renderRoute = () => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Signup} />
                <Route path="signup" component={Signup} />
                <Route path="login" component={Login} />
            </Route>
        </Router>
    </Provider>
);

