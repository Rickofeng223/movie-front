import {DELETE_USER, GET_USERS} from "../actions/admin/usersActions";

export default function UsersReducer(state=[],action){
    console.log('action',action)
    switch (action.type){
        case DELETE_USER:
            return state.filter(e=>e._id===action.userid);
        case GET_USERS:
            return  action.users;
        default:
            return state
    }

}