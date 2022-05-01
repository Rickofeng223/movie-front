// export default

const likesDisLlikes={likes:5,dislikes:7}
function BUTTONS(beforeIPressedAButton, {

        liked: AfterPressingTHeLikeButton,
        disliked:dislikedLAfterPressingIDISLike

}, review) {
    //prev either "like" or 'dislike"
    let likes = review.likes
    let dislikes = review.dislikes

    switch (beforeIPressedAButton) {
        //i had pressed thumbs up
        case "like":
            if (AfterPressingTHeLikeButton) {
                likes--;
                return{...review, likes, dislikes}
            } else if (dislikedLAfterPressingIDISLike) {
                likes--;
                dislikes++;
                return{...review, likes, dislikes}
            } else {//AFTER PRESSING I NEITHER LIKE NOR DISLIKE THE REVIEW
                likes--;
                return{...review, likes, dislikes}
            }
        case "dislike":
            if (AfterPressingTHeLikeButton) {
                likes++;
                dislikes--;
                return{...review, likes, dislikes}
            } else if (dislikedLAfterPressingIDISLike) {
                dislikes--;
                return{...review, likes, dislikes}
            } else { //AFTER PRESSING I NEITHER LIKE NOR DISLIKE THE REVIEW
                dislikes--;
                return{...review, likes, dislikes}
            }
    }
    return {...review, likes, dislikes}
}
let howItIsAfter={liked:false,disliked:false}
let previously="like"
console.log( BUTTONS(previously, howItIsAfter, likesDisLlikes ) , "" )

previously="like"
howItIsAfter={liked:true,disliked:false}
console.log( BUTTONS(previously, howItIsAfter, likesDisLlikes ), ""  )

previously="like"
howItIsAfter={liked:false,disliked:true}
console.log( BUTTONS(previously, howItIsAfter, likesDisLlikes ) , "" )

previously="dislike"
howItIsAfter={liked:false,disliked:false}
console.log( BUTTONS(previously, howItIsAfter, likesDisLlikes ), ""  )


previously="dislike"
howItIsAfter={liked:false,disliked:true}
console.log( BUTTONS(previously, howItIsAfter, likesDisLlikes ), ""  )
