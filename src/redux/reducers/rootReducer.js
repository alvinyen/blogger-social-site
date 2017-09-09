import { combineReducers } from 'redux';
import auth from './auth';
import post from './post';
import post_ from './post_';
import announce from './announce';
import comments from './comments';

export default combineReducers ({
    auth,
    post,
    post_,
    announce,
    comments
});
