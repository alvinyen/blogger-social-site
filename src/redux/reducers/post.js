import { ADD_POST, LOAD_POSTS, EDIT_POST, DELETE_POST } from './../actions/postActions';
import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';

export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_POST:
            const testArr = [...state, action.post];
            console.log(...testArr);
            return testArr;
        case LOAD_POSTS:
            return action.posts;
        case EDIT_POST:
            return map((post, index) => {
                if (post._id === action.post._id) {
                    return action.post
                } else {
                    return post
                }
            }, state) ;
        case DELETE_POST:
            return filter((post) => {
                console.log(action);
                console.log(`action._id: ${action._id}`);
                console.log(`post._id: ${post._id}`);
                return post._id !== action._id
            }, state) ;
        default:
            return state;
    }
}