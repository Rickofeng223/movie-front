import {LOGIN, LOGOUT  ,PROFILE, UPDATE} from "../actions/userActions";
import axios from "axios";


// export const updateProfileTODO = async ({navigate,dispatch}) => {
//     try {
//         let {data} = await axios.post('http://localhost:4000/api/auth/logout',{})
//         dispatch({type:LOGOUT, user:data})
//         navigate('/logged-out')
//     } catch (e) {
//         navigate('/login-error')
//         console.log(e.message)
//     }
// }


const loggedOut={id:null, user:null}
export default function UserReducer(state=null,action){
    let x
    switch (action.type){
        case LOGIN:
            return action.user  ;
        case UPDATE:
            // let {user:update}=action
       // let newUserData=  {
       //          id:state.id,
       //     user:{...state.user, ...update}
       //      }
            // userActions.updateData(id,)
            // return newUserData
            return state
        case LOGOUT:
            return loggedOut
        default:
            return state
    }
}