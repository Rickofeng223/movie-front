import rating from '../data/ratings.json';

const ratingsReducer =
    (state = rating, action) => {
        switch (action.type) {
            case 'like-rating':
                console.log('like in ratings reducer');
                return state.map(rating => {
                    if (rating.user === action.rating.user) {
                        if (rating.liked === true) {
                            rating.liked = false;
                        } else {
                            rating.liked = true;
                        }
                        return rating;
                    } else {
                        return rating;
                    }
                });
            case 'dislike-rating':
                console.log('dislike in ratings reducer');
                return state.map(rating => {
                    if (rating.user === action.rating.user) {
                        if (rating.disliked === true) {
                            rating.disliked = false;
                        } else {
                            rating.disliked = true;
                            if(rating.liked === true) {
                                rating.liked = false;
                            }
                        }
                        return rating;
                    } else {
                        return rating;
                    }
                });
            default:
                console.log('hit default ratings');
                return state;
        }
    }

export default ratingsReducer;