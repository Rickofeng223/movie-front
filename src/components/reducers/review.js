import reviews from '../data/reviews.json';

const reviewReducer =
    (state = reviews, action) => {
        console.log(action);
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
                review => review._id !== action.review._id);
        case 'like-review':
            console.log('like in review reducer');
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
            console.log('dislike in review reducer');
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
            console.log('hit default review');
            return state;
    }
}

export default reviewReducer;