import { List } from 'immutable';
import { ADD_COMMENT, INITIAL_COMMENTS } from '../actions/commentActions';

const initialState = { commentsArray: List([]) };

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case INITIAL_COMMENTS:
            return {
                ...state,
                commentsArray: List(action.comments),
            };
        default: 
            return state;
    }
};
