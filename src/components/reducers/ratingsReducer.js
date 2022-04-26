import rating from '../data/ratings.json';

const ratingsReducer =
    (state = rating, action) => {
        switch (action.type) {
            case 'like-rating':
                console.log('like');
                return state.map(review => {
                    if (rating.user === action.rating.user) {
                        if (rating.liked === true) {
                            rating.liked = false;
                            rating.likes--;
                        } else {
                            rating.liked = true;
                            rating.likes++;
                        }
                        return rating;
                    } else {
                        return rating;
                    }
                });
            case 'dislike-rating':
                console.log('dislike');
                return state.map(rating => {
                    if (rating.user === action.rating.user) {
                        if (rating.disliked === true) {
                            rating.disliked = false;
                            rating.dislikes--;
                        } else {
                            rating.disliked = true;
                            rating.dislikes++;
                            if(rating.liked = true) {
                                rating.liked = false;
                                rating.likes--;
                            }
                        }
                        return rating;
                    } else {
                        return rating;
                    }
                });
            default:
                console.log('hit default');
                return state;
        }
    }

export default ratingsReducer();