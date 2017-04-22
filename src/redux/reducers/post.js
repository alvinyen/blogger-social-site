import { ADD_POST } from './../actions/postActions' ;

export default ( state = [], action = {} ) => {
    switch(action.type){
        case ADD_POST :
            const testArr = [...state, action.post] ;
            console.log(...testArr);
            return testArr ;
        default:
            return state;
    }
}