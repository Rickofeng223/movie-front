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
            console.log(rv.find(item=>item.time===time));
            return rv;
        default:
            console.log('hit default');
            return reviews
    }
    console.log('unreachable code');
}

export default reviewReducer;