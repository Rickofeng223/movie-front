import {putUsers} from "../components/create-account/services";
import axios from "axios";
export const LOGIN='login', UPDATE='update',LOGOUT='logout',PROFILE='profile'

export const signup = async (user_data,{navigate,dispatch}) => {
    try {
        let {data} = await axios.post('http://localhost:4000/api/auth/signup',user_data)
        dispatch({type:LOGIN, user:data})
        navigate('/')
    } catch (e) {
        navigate('/login-error')
        console.log(e.message)
    }
}

export const login = async (auth,{navigate,dispatch}) => {
    try {
        let {data} = await axios.post('http://localhost:4000/api/auth/login',auth)
        dispatch({type:LOGIN, user:data})
        navigate('/')
    } catch (e) {
        navigate('/login-error')
        console.log(e.message)
    }
}
export const logout = async ({navigate,dispatch}) => {
    try {
        let {data} = await axios.post('http://localhost:4000/api/auth/logout',{})
        dispatch({type:LOGOUT, user:data})
        navigate('/logged-out')
    } catch (e) {
        navigate('/login-error')
        console.log(e.message)
    }
}

export const updateProfileTODO = async ({navigate,dispatch}) => {
    try {
        let {data} = await axios.post('http://localhost:4000/api/auth/logout',{})
        dispatch({type:LOGOUT, user:data})
        navigate('/logged-out')
    } catch (e) {
        navigate('/login-error')
        console.log(e.message)
    }
}




// export const updateUserService = async (dispatch, user) => {
//     const newTuit = await service.createTuit(tuit);
//     dispatch({
//         type: CREATE_TUIT,
//         newTuit
//     });
// }

const loggedOut={id:null, user:null}
const userActions={updateData:putUsers}
export default function UserReducer(state=loggedOut,action){
    switch (action.type){
        case LOGIN:
            let user = action.user
            return user  ;
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
    }
}