import reviews from '../data/reviews.json';

const reviewReducer =
    (state = reviews, action) => {
    switch (action.type) {
        case 'create-review':
            const newReview = {
                tmdb_id: 550,
                user_id: 1234,
                content: action.review,
                time: (new Date()).getTime() + '',
                likes: 0,
                dislikes: 0
            }
            return [
                newReview,
                ...state,
            ];
        default:
            return reviews
    }
}

export default reviewReducer;