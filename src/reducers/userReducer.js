import {LOGIN, LOGOUT, UPDATE} from "../actions/userActions";





export default function UserReducer(state={},action){
console.log("DISPATCH: ",action.type,<action className="user"></action>)

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