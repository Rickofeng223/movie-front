import axios from "axios";

export const getRatings = async (userid,dispatch)=>{
    try{
        const response = await axios.get(`http://localhost:4000/api/ratings/?user=${userid}`)
        dispatch({type:'set-ratings', ratings:response.data})
    }catch (e) {
        console.log(e)
        alert(`ERROR: ${e.message}`)
    }
}
export const deleteRating = async (userid,rating,dispatch)=>{
    try{
        const response = await axios.delete(`http://localhost:4000/api/ratings/${rating._id}?user=${userid}`)
dispatch(
    {type:'delete-rating', rating}
)
    }catch (e) {
        console.log(e)
        alert(`ERROR: ${e.message}`)
    }
}