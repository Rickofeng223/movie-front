import {LOGIN, LOGOUT, UPDATE} from "../actions/userActions";





export default function UserReducer(state=null,action){


    switch (action.type) {

        case LOGIN:
            return action.user;
        case UPDATE:

            let {user: update} = action

            return {user: update}
        case LOGOUT:
            return null

        default:
            console.log(state)
            return state
    }
}