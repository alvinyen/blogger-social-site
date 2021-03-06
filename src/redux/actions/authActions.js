
export const SET_AUTH_ERROR_MSG_EMPTY = 'SET_AUTH_ERROR_MSG_EMPTY' ;
export const AUTH_USER = 'AUTH_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const SET_ANNOUNCE_DISPLAY = 'SET_ANNOUNCE_DISPLAY';
import { loginApiAdd, signupApiAdd } from '../../../../config/blogger-social-site/config';
import { browserHistory } from 'react-router';
const devTest = false ;

export function setAnnounceDisplay(type, displayAnnounceBox){
    return {
        type,
        displayAnnounceBox
    };
}

export function setCurrentUser(user) {
    return {
        type: AUTH_USER,
        user
    };
}

export function setAuthErrorAction(errorMsg){
    return {
        type: AUTH_ERROR,
        errorMsg
    } ;
}

export function setAuthErrorEmpty(){
    return function (dispatch) {
        dispatch({
            type: SET_AUTH_ERROR_MSG_EMPTY
        });
    }
}

export default function login(data) {
    return async function (dispatch) {
        try {
            let response = await fetch(loginApiAdd, {
                method: `post`,
                headers: {
                    "Content-Type": `application/json`
                },
                body: JSON.stringify(data)
            });
            if (response.status != 200) {
                throw new Error(`${response.statusText}`);
            }
            const responseData = await response.json();
            const token = responseData.token;
            const user = responseData.user;
            sessionStorage.setItem('jwtToken', token);
            sessionStorage.setItem('user', JSON.stringify(user));
            dispatch(setCurrentUser(user));
            dispatch(setAnnounceDisplay(SET_ANNOUNCE_DISPLAY, false));
            user.admin ? browserHistory.push('dashboard') : browserHistory.push('/'); 
        } catch (e) {
            if(devTest){
                console.log("catch the error when login in authActions：", e);
            }
            dispatch(setAuthErrorAction('請輸入正確的帳號密碼~'));
        }
    }
}

export function logout() {
    return dispatch => {
        sessionStorage.removeItem('jwtToken');
        sessionStorage.removeItem('user');
        dispatch(setCurrentUser({}));
        dispatch(setAnnounceDisplay(SET_ANNOUNCE_DISPLAY, true));
        browserHistory.push('/');
    }
}

export function signup(data) {
    return async dispatch => {
        try {
            let response = await fetch(signupApiAdd, {
                method: `post`,
                headers: {
                    "Content-Type": `application/json`
                },
                body: JSON.stringify(data)
            });
            if (response.status != 200) {
                throw new Error(`${response.statusText}`);
            }
            const responseData = await response.json();
            const token = responseData.token;
            const user = responseData.user;
            sessionStorage.setItem('jwtToken', token);
            sessionStorage.setItem('user', JSON.stringify(user));
            dispatch(setCurrentUser(user));
            browserHistory.push('/');
        } catch (e) {
            if(devTest){
                console.log("catch the error when signup in authActions：", e);
            }
            dispatch(setAuthErrorAction('User already exist!!!'));
        }
    }
}