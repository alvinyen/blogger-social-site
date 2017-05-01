import { ADD_POST, LOAD_POSTS, EDIT_POST, DELETE_POST } from './../actions/postActions';
import map from 'lodash/fp/map';
import filter from 'lodash/fp/filter';

export default (state = [], action = {}) => {
    // console.log(state);
    switch (action.type) {
        case ADD_POST:
            const testArr = [...state, action.post];
            console.log(...testArr);
            return testArr;
        case LOAD_POSTS: 
            return action.posts; 
                // array
                // state.post = [ { _id,name }, { _id,name }, ....]
        case EDIT_POST:
            return state.map( (post) => {
                if(post._id === action.post._id){
                    return action.post
                } else {
                    return post ;
                }
            } );
        case DELETE_POST:
            console.log(`delete post reducer`);
            const index =  state.findIndex( (post, index) => {
                console.log(`index: ${index}`);
                return post._id === action._id ;
            } );
            console.log(index) ;
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