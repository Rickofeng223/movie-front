
const reviewReducer =
    (state = [], action) => {
    switch (action.type) {

        case 'get-reviews':
            return action.reviews
        case 'create-review':

            return [ action.review, ...state];
        case 'delete-review':
            return state.filter(

                review => review._id !== action.review._id);
        case 'like-review':
            return state.map(review => {
                if (review._id === action.review._id) {
                    if (action.liked === true) {
                        review.likes--;
                    } else {
                        review.likes++;
                        if(action.disliked === true) {
                            review.dislikes--;
                        }
                    }
                    return review;
                } else {
                    return review;
                }
            });
        case 'dislike-review':
            return state.map(review => {
                if (review._id === action.review._id) {
                    if (action.disliked === true) {
                        review.dislikes--;
                    } else {
                        review.dislikes++;
                        if(action.liked === true) {
                            review.likes--;
                        }
                    }
                    return review;
                } else {
                    return review;
                }
            });

        default:
            return state;
    }
}

export default reviewReducer;