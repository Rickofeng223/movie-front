import {LOGIN, LOGOUT, UPDATE} from "../actions/userActions";

export default function UserReducer(state = null, action) {
    let x
    switch (action.type) {
        case LOGIN:
            return action.user;
        case UPDATE:
            let {user: update} = action
            return {user: update}
        case LOGOUT:
            return null
        default:
            return state
    }
}