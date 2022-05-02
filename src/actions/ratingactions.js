
//TODO REFACTOR to actions
import axios from "axios";

const likeRating = async (review, rating,dispatch,cb) => {

    dispatch({type: 'like-rating', rating});
    dispatch({type: 'like-review', review, liked: rating.liked, disliked: rating.disliked});
    if (rating.liked === true) {
        rating.liked = false;

        review.likes--;
    } else {
        rating.liked = true;
        review.likes++;
    }
}

//TODO REFACTOR to actions
export const likeOrDislike = async (uid,review,isLike,dispatch ) => {
    // console.log(uid,review,rating,isLike)
    // //like
    // if(isLike) {
    //     if (rating.disliked === true) {
    //         rating.disliked = false;
    //
    //         review.dislikes--;
    //     } else {
    //         rating.disliked = true;
    //         review.dislikes++;
    //         if (rating.liked === true) {
    //             rating.liked = false;
    //             review.likes--;
    //         }
    //     }
    // }else{//dislike
    //     if (rating.liked === true) {
    //         rating.liked = false;
    //
    //         review.likes--;
    //     } else {
    //         rating.liked = true;
    //         review.likes++;
    //     }
    // }

    await axios.put(`http://localhost:4000/api/reviews/${review._id}?user=${uid}`, review)
     dispatch({'type':'update-review',review})
    // dispatch({type: 'dislike-rating', rating})
    // dispatch({type: 'dislike-review', review, liked: rating.liked, disliked: rating.disliked})
 }
