import rating from '../data/ratings.json';

const ratingsReducer =
    (state = rating, action) => {
        switch (action.type) {
                // console.log('like');
                // return state.map(rating => {
                //     if (rating.user === action.rating.user) {
                //         if (rating.liked === true) {
                //             rating.liked = false;
                //
                //             rating.likes--;
                //         } else {
                //             rating.liked = true;
                //             rating.likes++;
                //         }
                //         return rating;
                //     } else {
                //         return rating;
                //     }
                // });
            case 'like-rating':
            case 'dislike-rating':

                console.log('dislike');

                return state.map(rating => {
                    if (rating.user === action.rating.user) {
                        return action.update
                        // if (rating.disliked === true) {
                        //     rating.disliked = false;
                        //
                        //     rating.dislikes--;
                        // } else {
                        //     rating.disliked = true;
                        //     rating.dislikes++;
                        //     if(rating.liked === true) {
                        //         rating.liked = false;
                        //         rating.likes--;
                        //     }
                        // }
                        // return rating;
                    } else {
                        return rating;
                    }
                });
            case 'delete-rating':
                return state.filter (e=>e._id !== action.rating._id)
            default:
                console.log('hit default');
                return state;
        }
    }

export default ratingsReducer;