import { List } from 'immutable';
import { ADD_POST, LOAD_POSTS, EDIT_POST, DELETE_POST } from './../actions/postActions';

export default (state = [], action = {}) => {
    // console.log(action.type);
    switch (action.type) {
        case ADD_POST:
            return [...state, action.post];
        case LOAD_POSTS: 
            return action.posts; 
        case EDIT_POST:
            const immutableList = List(state);
            immutableList.map((post, index) => {
                if (post._id === action.post._id) {
                    // console.log(index);
                    immutableList.set(index, action.post);
                }
            });
            return immutableList.toArray();
        case DELETE_POST:
            const index = state.findIndex((post) => (post._id === action._id));
            // console.log(index);
            if (index !== -1) {
                const newStateData = state;
                newStateData.splice(index, 1);
                return newStateData;
            }
            return state;
        default:
            return state;
    }
};
