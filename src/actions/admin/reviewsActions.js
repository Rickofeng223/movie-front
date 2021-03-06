import axios from "axios";

export const getReviews = async (userid,review,dispatch,sortType='recent')=>{
    try{
        const {data:reviews} = await axios.get(`http://localhost:4000/api/reviews/?user=${userid}&sort=${sortType}`)
        dispatch({type: 'get-reviews', reviews:reviews})
    }catch (e) {
        console.log(e)
        alert(`ERROR: ${e.message}`)
    }
}
export const deleteReview = async (userid,review,dispatch)=>{
    try{

        const response = await axios.delete(
            `http://localhost:4000/api/reviews/${review._id}?user=${userid}`
        )
        dispatch({type: 'delete-review', review})
    }catch (e) {
        console.log(e)
        alert(`ERROR: ${e.message}`)
    }
}