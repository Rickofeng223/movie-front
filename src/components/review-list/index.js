import React, {useEffect, useState} from "react";
//import reviews from "../data/reviews.json"
import ReviewListItem from "./review-list-item";
import {useDispatch, useSelector} from "react-redux";
import {deleteReview, getReviews} from "../../actions/admin/reviewsActions.js";
import {useSearchParams} from "react-router-dom";
import {getRatings} from "../../actions/admin/ratingsActions";


const ReviewList = () => {
 const dispatch = useDispatch()
     const user = useSelector(s=>s.currentUser);
     const reviews = useSelector(s=>s.reviews);
    const [sortType, setSort] = useState('recent');
    const [resort,setReSort] = useState(true)
    const [query,setQuery] = useSearchParams( )
    useEffect(() => {
         let iife = async ()=> {
                await getRatings(user._id, dispatch)
                await getReviews(user._id, null, dispatch,sortType)
        }
        if(resort) {
            iife();
            setReSort(false)
        }
    }, [sortType,resort,user._id,dispatch]);

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
                            <ReviewListItem uid={user._id||query.get("uid")}
                                            review={review}
                                            onDelete={()=>
                                                deleteReview(user._id,review,dispatch)}
                                            updateCallback={()=>setReSort(true)}
                            />
                        );
                    })
                }
            </ul>
        </>
    );
}

export default ReviewList;