import reviews from '../data/reviews.json';

const reviewReducer =
    (state = reviews, action) => {
    switch (action.type) {
        case 'create-review':
            const time = (new Date()).getTime() + '';
            const newReview = {
                tmdb_id: 550,
                user_id: 1234,
                content: action.review,
                time: time,
                likes: 0,
                dislikes: 0
            }
            const rv = [
                newReview,
                ...state,
            ];
            console.log(rv);
            return rv;
        case 'delete-review':
            return state.filter(
                review => review.wd_id !== action.review.wd_id);
        case 'like-review':
            console.log('like');
            return state.map(review => {
                if (review.wd_id === action.review.wd_id) {
                    if (review.liked === true) {
                        review.liked = false;
                        review.likes--;
                    } else {
                       review.liked = true;
                       review.likes++;
                    }
                    return review;
                } else {
                    return review;
                }
            });
        case 'dislike-review':
            console.log('dislike');
            return state.map(review => {
                if (review.wd_id === action.review.wd_id) {
                    if (review.disliked === true) {
                        review.disliked = false;
                        review.dislikes--;
                    } else {
                        review.disliked = true;
                        review.dislikes++;
                        if(review.liked = true) {
                            review.liked = false;
                            review.likes--;
                        }
                    }
                    return review;
                } else {
                    return review;
                }
            });
        default:
            console.log('hit default');
            return state;
    }
}

export default reviewReducer;