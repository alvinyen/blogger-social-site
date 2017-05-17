import { ADD_POST, LOAD_POSTS, EDIT_POST, DELETE_POST } from './../actions/postActions';
import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';

export default (state = [], action = {}) => {
    switch (action.type) {
        case ADD_POST:
            const testArr = [...state, action.post];
            return testArr;
        case LOAD_POSTS: 
            return action.posts; 
        case EDIT_POST:
            return state.map( (post) => {
                if(post._id === action.post._id){
                    return action.post
                } else {
                    return post ;
                }
            } );
        case DELETE_POST:
            const index =  state.findIndex( (post, index) => {
                return post._id === action._id ;
            } );
            if( index!==-1 ){
                let newStateData = state ;
                newStateData.splice( index, 1 );
            }else{
                return state ;
            }
        default:
            return state;
    }
}