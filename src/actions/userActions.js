import axios from "axios";
export const LOGIN='login', UPDATE='update-profile',LOGOUT='logout',PROFILE='profile'

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
        let {status } = await axios.post('http://localhost:4000/api/auth/logout',{})
        dispatch({type:LOGOUT, user:{_id:null}})
        navigate('/logged-out')
    } catch (e) {
        navigate('/login-error')
        console.log(e.message)
    }
}

export const updateProfile = async (user, {navigate,dispatch}, obj) => {
    try {
        let {data} = await axios.put(`http://localhost:4000/api/users/${user._id}?user=${user._id}`,user)
        dispatch({type:UPDATE, user:user})
        obj.value = true
    } catch (e) {
        navigate('/error')
        console.log(e.message)
    }
}
