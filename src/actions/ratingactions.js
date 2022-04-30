
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
export const likeOrDislike = async (uid,review,rating,isLike,dispatch, callback) => {
    //like
    if(isLike) {
        if (rating.disliked === true) {
            rating.disliked = false;

            review.dislikes--;
        } else {
            rating.disliked = true;
            review.dislikes++;
            if (rating.liked === true) {
                rating.liked = false;
                review.likes--;
            }
        }
    }else{//dislike
        if (rating.liked === true) {
            rating.liked = false;

            review.likes--;
        } else {
            rating.liked = true;
            review.likes++;
        }
    }

    await axios.put(`http://localhost:4000/api/reviews/${review._id}?user=${uid}`, review)
    await axios.put(`http://localhost:4000/api/ratings/${rating._id}?user=${uid}`,rating )
    dispatch({'type':'update-rating',rating})
    dispatch({'type':'update-review',review})
    // dispatch({type: 'dislike-rating', rating})
    // dispatch({type: 'dislike-review', review, liked: rating.liked, disliked: rating.disliked})
    callback()
}
