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
            console.log('reducer!');
            const rv = [
                newReview,
                ...state,
            ];
            console.log(rv);
            return rv;
        case 'delete-review':
            return state.filter(
                review => review.wd_id !== action.review.wd_id);
        default:
            console.log('hit default');
            return state;
    }
}

export default reviewReducer;