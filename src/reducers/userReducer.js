import {LOGIN, LOGOUT, UPDATE} from "../actions/userActions";





export default function UserReducer(state={},action){
 
    switch (action.type) {

        case LOGIN:
            return {...action.user};
        case UPDATE:
            return {...action.user}
        case LOGOUT:
            return null

        default:
            console.log(state)
            return state
    }
}