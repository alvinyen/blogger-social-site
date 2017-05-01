export const ADD_POST = 'ADD_POST';
export const LOAD_POSTS = 'LOAD_POSTS';
export const LOAD_POST = 'LOAD_POST';
export const CLEAR_POST = 'CLEAR_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
import { newPostApiAdd, postApiAdd } from './../../config/config';
import { browserHistory } from 'react-router';

export const newPost = (data) => {
    return async (dispatch) => {
        try {

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
            dispatch({ type: ADD_POST, post: responseData.post });
            browserHistory.replace('dashboard');
        } catch (e) {
            console.log('error occur when newPost action ', e);
        }
    }
};

export const fetchPosts = () => {
    return async (dispatch) => {
        try {
            let response = await fetch(newPostApiAdd);
            if (response.status != 200) {
                throw new Error(`${response.statusText}`);
            }
            const responseData = await response.json();
            dispatch({ type: LOAD_POSTS, posts: responseData.posts });
        } catch (e) {
            console.log('error occur when fetchPosts action ', e);
        }
    }
}

export const getPost = (id) => {
    return async (dispatch) => {
        if (id === undefined || id === 'undefined') {
            console.log(`getPost action: id undefined`);
            return;
        }
        try {
            // console.log(`getPost(id): ${postApiAdd}${id}`);
            let response = await fetch(`${postApiAdd}${id}`);
            if (response.status != 200) {
                throw new Error(`${response.statusText}`);
            }
            const responseData = await response.json();
            dispatch({ type: LOAD_POST, post: responseData.post });
        } catch (e) {
            console.log('error occur when fetchPosts action ', e);
        }
    }
}

export const clearPost = () => ({ type: CLEAR_POST });

export const editPost = (data, id) => {
    const jsonData = {
        name: data.name,
        content: data.content
    };
    return async (dispatch) => {
        if (id === undefined || id === 'undefined') {
            console.log(`editPost action: id undefined`);
            return;
        }
        try {
            let response = await fetch(`${postApiAdd}${id}`, {
                method: `put`,
                headers: {
                    "authorization": sessionStorage.getItem('jwtToken'),
                    "Content-Type": `application/json`
                },
                body: JSON.stringify(jsonData)
            });

            if (response.status != 200) {
                throw new Error(`${response.statusText}`);
            }

            const responseData = await response.json();
            dispatch({ type: EDIT_POST, post: responseData.post });
            // fetchPosts();
            browserHistory.push('dashboard');

        } catch (e) {
            console.log('error occur when fetchPosts action ', e);
        }
    }
}

export const deletePost = (id) => {
    if (id === undefined || id === 'undefined') {
        console.log(`deletePost action: id undefined`);
        return;
    }
    return async (dispatch) => {
        try {
            // console.log(`getPost(id): ${postApiAdd}${id}`);
            let response = await fetch(`${postApiAdd}${id}`, {
                method: `delete`,
                headers: {
                    "authorization": sessionStorage.getItem('jwtToken')
                }
            });

            if (response.status != 200) {
                console.log(`error in delete post with ${response.status}`);
                throw new Error(`${response.statusText}`);
            }

            const responseData = await response.json();
            await dispatch({ type: DELETE_POST, _id: responseData._id });
            browserHistory.push('dashboard');
        } catch (e) {
            console.log('error occur when fetchPosts action ', e);
        }
    }
}