import { ADD_POST, LOAD_POSTS } from './../actions/postActions' ;

export default ( state = [], action = {} ) => {
    switch(action.type){
        case ADD_POST :
            const testArr = [...state, action.post] ;
            console.log(...testArr);
            return testArr ;
        case LOAD_POSTS:
            return action.posts ;
        default:
            return state;
    }
}