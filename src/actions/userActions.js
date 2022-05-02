import axios from "axios";

export const LOGIN = 'login', UPDATE = 'update-profile', LOGOUT = 'logout', PROFILE = 'profile'


export const signup = async (user_data, {navigate, dispatch}) => {
    try {
        let {data} = await axios.post(`http://localhost:4000/api/auth/signup`, user_data)
        dispatch({type: LOGIN, user: data})
        navigate({pathname: '/', search: `?uid=${data._id}`})
    } catch (e) {
        navigate('/signup-error')
        console.log(e.message)
    }
}

export const login = async (auth,  dispatch ) => {

        let {data} = await axios.post('http://localhost:4000/api/auth/login',  auth)

        return data 


}
export const getUserState = async (userid, dispatch) => {
    if(!userid){
        console.log('no userid')
        return {msg:'notworking'}
    }

    try {
        let {data:user} = await axios.get(
            `http://localhost:4000/api/users/${userid}?user=${userid}`
            )

        dispatch({type: LOGIN, user})
        return {...user}
    } catch (e) {
       alert('error: '+e)
        console.log(e.message)
    }
}
export const logout = async ({navigate, dispatch}) => {
    try {
        // let {status} = await axios.post('http://localhost:4000/api/auth/logout', {})
        dispatch({type: LOGOUT, user: {}})
    } catch (e) {
        console.log(e.message)
    }
}

export const updateProfile = async (user, {navigate,dispatch}) => {
    try {
        let {data} = await axios.put(`http://localhost:4000/api/users/${user._id}?user=${user._id}`,user)
        dispatch({type:UPDATE, user})
    } catch (e) {
        navigate('/error')
        console.log(e.message)
    }
}
