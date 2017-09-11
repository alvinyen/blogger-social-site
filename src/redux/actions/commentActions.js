import { newCommentApiAdd } from '../../../../config/blogger-social-site/config';

const devTest = false;

// comments
export const INITIAL_COMMENTS = 'INITIAL_COMMENTS';
export const LOAD_COMMENTS = 'LOAD_COMMENTS';
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';
export const ADD_COMMENT = 'ADD_COMMENT';

//comments 
// export const initialComments = (comments) => ({
//     type: INITIAL_COMMENTS,
//     comments,
// });

// export const loadInitialComments = (socket, postId) => {
//     return (dispatch) => {
//         if (postId === 1) {
//             dispatch(initialComments([
//                 {
//                     id: 0, name: 'Alvin', when: new Date().valueOf(), comment: 'dsfsdfsdf',
//                 },
//             ]));
//         } else if (postId === 2) {
//             dispatch(initialComments([
//                 {
//                     id: 0, name: 'Alvin', when: new Date().valueOf(), comment: 'dsfsdfsdf',
//                 },
//                 {
//                     id: 1, name: 'Billy', when: new Date().valueOf(), comment: 'yoyoyo',
//                 },
//             ]));
//         } else if (postId === 3) {
//             dispatch(initialComments([
//                 {
//                     id: 0, name: 'Alvin', when: new Date().valueOf(), comment: 'dsfsdfsdf',
//                 },
//                 {
//                     id: 1, name: 'Billy', when: new Date().valueOf(), comment: 'yoyoyo',
//                 },
//                 {
//                     id: 2, name: 'TwoPac', when: new Date().valueOf(), comment: `hip 
//                     hop for
//                     lift`,
//                 },
//             ]));
//         }

//         dispatch(initialComments([]));
//     };
// };

export const addComment = (comment) => ({ 
    type: ADD_COMMENT, 
    comment,
});

export const newComment = (data) => {
    return async (dispatch) => {
        try {
            const response = await fetch(newCommentApiAdd, {
                method: 'post',
                headers: {
                    "Content-Type": 'application/json'
                    // "authorization": sessionStorage.getItem('jwtToken')
                },
                body: JSON.stringify(data)
            });
            if (response.status !== 200) {
                throw new Error(`${response.statusText}`);
            }
            const responseData = await response.json();
            dispatch({ type: ADD_COMMENT, comment: responseData.comment });
            // browserHistory.replace('dashboard');
        } catch (e) {
            if (devTest) {
                console.log('catch the error when newComment in commentActions：', e);
            }
        }
    };
};

export const fetchCommentsByPostId = (postId) => {
    return async (dispatch) => {
        try {
            console.log(`${newCommentApiAdd}${postId}`);
            const response = await fetch(`${newCommentApiAdd}${postId}`);
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
            const responseData = await response.json();
            dispatch({ type: LOAD_COMMENTS, comments: responseData.comments });
        } catch (e) {
            if (devTest) {
                console.log('error occur when fetchCommentsByPostId action ', e);
            }
        }
    };
};

export const clearComments = () => ({ 
    type: CLEAR_COMMENTS
});


// below are for socket.io

export const initialComments = (resultArray) => ({
    type: INITIAL_COMMENTS,
    comments: resultArray,
});  

// export const loadInitialCommentsSocket = (socket) => {
//     return (dispatch) => {
//       socket.on('initialComments', (resultArray) => {
//         dispatch(initialComments(resultArray));
//       });
//     };
// };
                                        // post_id, name, when, comment
export const addNewCommentSocket = (socket, commentObject) => {
    console.log(...commentObject);
    return (dispatch) => {
        socket.emit('addComment', commentObject);
    };
};
