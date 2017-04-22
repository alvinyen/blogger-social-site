import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './../containers/App.jsx';
import Signup from './../components/Signup.jsx';
import Login from './../components/Login.jsx';
import Test from './../components/Test.jsx';
import { Provider } from 'react-redux';
import store from './../redux/store' ;
import { setCurrentUser } from './../redux/actions/authActions' ;
import Home from './../components/Home.jsx' ;
import Dashboard from './../components/Dashboard.jsx' ;

if(sessionStorage.jwtToken){
    const user = JSON.parse(sessionStorage.user);
    store.dispatch(setCurrentUser(user));
}

const isAdmin = () => {
    // console.log('isadmin in rootRoute.js') ;
    if(!sessionStorage.getItem('jwtToken') && !sessionStorage.getItem('user') ){
        return false ;
    }
    const user = JSON.parse(sessionStorage.getItem('user')); // parse to json object
    return user.admin === true ? true : false ;
}

const requireAuth = (nextState, replace) => {
    // console.log('require auth in rootRoute.js') ;
    if(!isAdmin()){
        replace('/login');
    }
}

export const renderRoute = () => (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="signup" component={Signup} />
                <Route path="login" component={Login} />
                <Route path="dashboard" component={Dashboard} onEnter={requireAuth} />
            </Route>
        </Router>
    </Provider>
);

