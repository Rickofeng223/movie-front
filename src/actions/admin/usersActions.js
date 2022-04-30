import axios from "axios";
export const DELETE_USER='delete-user'
export const  GET_USERS="get-users";


export const getUsers = async ( userid,dispatch)=>{
    try{

        const {data:users} = await axios.get(`http://localhost:4000/api/users/?user=${userid}`)
        console.log(users)
        dispatch({type:GET_USERS,  users })
return users
    }catch (e) {
        console.log(e)
        alert(`ERROR: ${e.message}`)
    }
}

export const deleteUser = async (userid,id,dispatch)=>{
    try{
        const response = await axios.delete(`http://localhost:4000/api/users/${id}?user=${userid}`)
        dispatch({type:DELETE_USER,  userid:id })

    }catch (e) {
        console.log(e)
        alert(`ERROR: ${e.message}`)
    }
}