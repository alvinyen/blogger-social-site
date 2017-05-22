import { combineReducers } from 'redux';
import auth from './../reducers/auth' ;
import post from './../reducers/post' ;
import post_ from './../reducers/post_' ;
import announce from './announce' ;

export default combineReducers ({
    auth,
    post,
    post_,
    announce
});