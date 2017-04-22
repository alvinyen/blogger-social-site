export const ADD_POST = 'ADD_POST';
export const LOAD_POSTS = 'LOAD_POSTS';
import { newPostApiAdd } from './../../config/config';
import { browserHistory } from 'react-router';

export const newPost = (data) => {
    return async (dispatch) => {
        try{

            let response = await fetch(newPostApiAdd, {
                method: `post`,
                headers: {
                    "Content-Type": `application/json`,
                    "authorization": sessionStorage.getItem('jwtToken')
                },
                body: JSON.stringify(data)
            });
            if (response.status != 200) {
                throw new Error(`${response.statusText}`);
            }
            const responseData = await response.json();
            dispatch( { type: ADD_POST, post: responseData.post } );
            browserHistory.push('dashboard');
            console.log(responseData.message);
            console.log(responseData.post);
        }catch(e){
            console.log('error occur when newPost action ', e) ;
        }
    }
} ;

export const fetchPosts = () => {
    return async (dispatch) => {
        try{
            let response = await fetch(newPostApiAdd);
            if (response.status != 200) {
                throw new Error(`${response.statusText}`);
            }
            const responseData = await response.json();
            dispatch( { type: LOAD_POSTS, posts: responseData.posts } );
        }catch(e){
            console.log('error occur when fetchPosts action ', e) ;
        }
    }
}