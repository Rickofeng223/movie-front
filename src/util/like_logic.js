export default (prev/*"liked" or "disliked"*/, action/*LIKE DISLIKE*/ , review )=> {
let liked, disliked
    liked = action==="like"
    disliked = !liked

    //given the previous state of the button (liked disliked or neither)
    // determine what happens if the action LIKE OR DISLIKE is applied to it
    switch (prev) {
        case "liked":
            //is like pushed
            //is dislike pushed
            if (action === "like") {
                disliked = liked = false
                /* Do nothing to liked button - leave active */
            } else if (action === "dislike") {
                disliked = true
                liked = false
                /* Make like button inactive */
                /* Make dislike button active */
            }
            break

        case "disliked":
            //is like pushed
            //is disliike pushed
            if (action === "like") {
                liked = true
                disliked = false
                /* Make dislike button inactive */
                /* Make like button active */
            } else if (action === "dislike") {
                liked = disliked = false
                /* Do nothing to dislike button - leave active */
            }
            break

        case "":
    }

    return {liked,disliked}
}
