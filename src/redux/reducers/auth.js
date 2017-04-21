import isEmpty from 'lodash/fp/isEmpty' ;
import { AUTH_USER } from './../actions/authActions' ;

const initialState = {
    isAuthenticated: false,
    currentUser: {}
} ;

export default function auth(state = initialState, action = {}){
    switch(action.type){
        case AUTH_USER:
            return {
                isAuthenticated: !isEmpty(action.user),
                currentUser: action.user
            } ;
            // { isAuthenticated true, currentUser: {name: alvinnnn} }
        default:
            return state ;
    }
}