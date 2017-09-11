import { List } from 'immutable';
import { ADD_COMMENT, 
         INITIAL_COMMENTS, 
         LOAD_COMMENTS,
         CLEAR_COMMENTS } from '../actions/commentActions';

const initialState = { commentsList: List([]) };

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case INITIAL_COMMENTS: // socket.io版，和LOAD_COMMENTS 取其一
            return {
                ...state,
                commentsList: List(action.comments),
            };
        case LOAD_COMMENTS: // api版，和INITIAL_COMMENTS 取其一
            return {
                ...state,
                commentsList: List(action.comments),
            };
        
        case ADD_COMMENT: 
            return {
                commentsList: state.commentsList.push(action.comment),
            };
        case CLEAR_COMMENTS:
            return initialState;
        default: 
            return state;
    }
};
