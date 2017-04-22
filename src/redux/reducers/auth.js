import isEmpty from 'lodash/fp/isEmpty' ;
import { AUTH_USER, AUTH_ERROR} from './../actions/authActions' ;

const initialState = {
    isAuthenticated: false,
    currentUser: {},
    errorMsg: ''
} ;

export default function auth(state = initialState, action = {}){
    switch(action.type){
        case AUTH_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                currentUser: action.user
            } ;
            // { isAuthenticated true, currentUser: {name: alvinnnn} }
        case AUTH_ERROR:
            console.log(action.errorMsg);
            return {
                isAuthenticated: false,
                currentUser: {},
                errorMsg: action.errorMsg
            };
        default:
            return state ;
    }
}