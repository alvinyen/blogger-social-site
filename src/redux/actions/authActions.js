
export const AUTH_USER = 'AUTH_USER' ;
import { loginApiAdd } from './../../config/config';
import {browserHistory} from 'react-router';

export function setCurrentUser(user){
    return {
        type: AUTH_USER,
        user
    } ;
}

export default function login(data){ 
    return async function(dispatch){
        try {
            let response = await fetch( loginApiAdd, {
                method: `post`,
                headers: {
                    "Content-Type": `application/json`
                },
                body: JSON.stringify(data)
            });
            if(response.status != 200){
                throw new Error(`${response.statusText}`);
            }
            const responseData = await response.json();
            // console.log(responseData);
            const token = responseData.token ;
            const user = responseData.user ;
            sessionStorage.setItem('jwtToken', token);
            sessionStorage.setItem('user', JSON.stringify(user));
            dispatch(setCurrentUser(user)) ;
            browserHistory.push('/');
        } catch (e) {
            console.log("error...", e);
        }
    }
}

export function logout(){
    return dispatch => {
        sessionStorage.removeItem('jwtToken');
        sessionStorage.removeItem('user');
        dispatch(setCurrentUser({}));
        browserHistory.push('/');
    }
}