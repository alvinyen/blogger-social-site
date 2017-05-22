import { SET_ANNOUNCE_DISPLAY } from './../actions/authActions' ;

export default function announce(state = true, action){
    switch(action.type){
        case SET_ANNOUNCE_DISPLAY:
            return action.displayAnnounceBox ;
        default:
            return state;
    }
}