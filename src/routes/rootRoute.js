import React from 'react';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import App from './../containers/App.jsx';
import Signup from './../components/Signup.jsx';
import Login from './../components/Login.jsx';
import { Provider } from 'react-redux';
import store from './../redux/store' ;
import { setCurrentUser } from './../redux/actions/authActions' ;
import Home from './../components/Home.jsx' ;
import Dashboard from './../components/Dashboard.jsx' ;
import NewPost from './../components/NewPost.jsx' ;
import ShowPost from './../components/post/ShowPost.jsx' ;
import EditPost from './../components/post/EditPost.jsx' ;

if(sessionStorage.jwtToken){
    const user = JSON.parse(sessionStorage.user);
    store.dispatch(setCurrentUser(user));
}

const isAdmin = () => {
    if(!sessionStorage.getItem('jwtToken') && !sessionStorage.getItem('user') ){
        return false ;
    }
    const user = JSON.parse(sessionStorage.getItem('user')); // parse to json object
    return user.admin === true ? true : false ;
}

const requireAuth = (nextState, replace) => {
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
                <Route path="posts/new" component={NewPost} onEnter={requireAuth} />
                <Route path="posts/:post_id" component={ShowPost} />
                <Route path="posts/:post_id/edit" component={EditPost}  onEnter={requireAuth} /> 
            </Route>
        </Router>
    </Provider>
);

