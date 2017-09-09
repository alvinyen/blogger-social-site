export const ADD_COMMENT = 'ADD_COMMENT';

export const INITIAL_COMMENTS = 'INITIAL_COMMENTS';

export const addComment = (comment) => ({ 
    type: ADD_COMMENT, 
    comment, 
});

export const initialComments = (comments) => ({
    type: INITIAL_COMMENTS,
    comments,
});


export const loadInitialComments = (socket, postId) => {
    return (dispatch) => {
        if (postId === 1) {
            dispatch(initialComments([
                {
                    id: 0, name: 'Alvin', when: new Date().valueOf(), comment: 'dsfsdfsdf',
                },
            ]));
        } else if (postId === 2) {
            dispatch(initialComments([
                {
                    id: 0, name: 'Alvin', when: new Date().valueOf(), comment: 'dsfsdfsdf',
                },
                {
                    id: 1, name: 'Billy', when: new Date().valueOf(), comment: 'yoyoyo',
                },
            ]));
        } else if (postId === 3) {
            dispatch(initialComments([
                {
                    id: 0, name: 'Alvin', when: new Date().valueOf(), comment: 'dsfsdfsdf',
                },
                {
                    id: 1, name: 'Billy', when: new Date().valueOf(), comment: 'yoyoyo',
                },
                {
                    id: 2, name: 'TwoPac', when: new Date().valueOf(), comment: `hip 
                    hop for
                    lift`,
                },
            ]));
        }
    };
};
