import { ADD_POST, LOAD_POSTS, EDIT_POST, DELETE_POST } from './../actions/postActions';


export default (state = [], action = {}) => {
    // console.log(action.type);
    switch (action.type) {
        case ADD_POST:
            return [...state, action.post];
        case LOAD_POSTS: 
            return action.posts; 
        case EDIT_POST:
            return state.map((post) => {
                if (post._id === action.post._id) {
                    return action.post;
                }
                return post;
            });
        case DELETE_POST:
            const index = state.findIndex((post) => (post._id === action._id));
            console.log(index);
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
