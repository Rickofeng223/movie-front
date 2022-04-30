import React, {useEffect, useState} from "react";
//import reviews from "../data/reviews.json"
import ReviewListItem from "./review-list-item";
import {useDispatch, useSelector} from "react-redux";
import {deleteReview, getReviews} from "../../actions/admin/reviewsActions.js";


const ReviewList = () => {
 const dispatch = useDispatch()
     const user = useSelector(s=>s.currentUser);
     const reviews = useSelector(s=>s.reviews);
    const [sortType, setSort] = useState('recent');
    useEffect(() => {
         let iife = async ()=> {
                await getReviews(user._id, null, dispatch,sortType)
        }
        iife();
    }, [sortType,dispatch]);

    return(
        <>
            <div className="row">
                <div>
                    <h2 className="mt-4">Reviews</h2>
                </div>

                <select onChange={(e)=> {
                    setSort(e.target.value)
                    console.log(e.target.value)
                }}
                        className="float-end w-25">
                    <option value="recent">Recent</option>
                    <option value="likes">Most dislikes</option>
                    <option value="dislikes">Most likes</option>
                </select>
            </div>

            <ul className="">
                {
                    reviews.map(review => {
                        console.log(review)

                        return(
                            <ReviewListItem uid={user._id}
                                            review={review}
                                            onDelete={()=>
                                                deleteReview(user._id,review,dispatch)}
                            />
                        );
                    })
                }
            </ul>
        </>
    );
}

export default ReviewList;