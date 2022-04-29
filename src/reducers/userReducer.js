import {LOGIN, LOGOUT  ,PROFILE, UPDATE} from "../actions/userActions";
import axios from "axios";





const loggedOut={id:null, user:null}
export default function UserReducer(state=null,action){
    switch (action.type){
        case LOGIN:
            return action.user  ;
        case UPDATE:
            let {user:update}=action
            console.log(update)
            return {user: update}
        case LOGOUT:
            return  null
        default:
            console.log(state)
            return state
    }
}