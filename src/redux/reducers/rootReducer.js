import { combineReducers } from 'redux';
import auth from './../reducers/auth' ;
import post from './../reducers/post' ;
import post_ from './../reducers/post_' ;

export default combineReducers ({
    auth,
    post,
    post_
});