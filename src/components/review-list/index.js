import React, {useEffect, useState} from "react";
//import reviews from "../data/reviews.json"
import ReviewListItem from "./review-list-item";
import {useDispatch, useSelector} from "react-redux";
import {getReviews}   from "../../actions/admin/reviewsActions.js";
import review from "../reducers/review";

const sortRecent = (a, b) => b.recent - a.recent;
const sortLikes = (a, b) => b.likes - a.likes;
const sortDislikes = (a, b) => b.dislikes - a.dislikes;

const ReviewList = () => {
const dispatch = useDispatch()
    const user = useSelector(s=>s.currentUser);
    const reviews = useSelector(s=>s.reviews);

    let [sortedData, setSorted] = useState(reviews);
    //const [data, setData] = useState([]);
    const [sortType, setSort] = useState('recent');

    useEffect(() => {
        let iife = async ()=>{
        if(!reviews.length){console.log("GETTING REIVIEWS")
            await getReviews(user._id, null,dispatch )
        }


        let temp;
        switch (sortType) {
            case "recent":
                temp = reviews.sort(sortRecent);
                setSorted(temp);
                break
            case "likes":
                temp = reviews.sort(sortLikes);
                setSorted(temp);
                break
            case "dislikes":
                temp = reviews.sort(sortDislikes);
                setSorted(temp);
                break
        }}
        iife()
        //const sorted = reviewsData.sort((a, b) => b[sortType] - a[sortType]);
        //temp = sortedData.sort((a, b) => b[sortType] - a[sortType]);
        //setSorted(temp);
        //setReviewsData(sorted);


    }, [sortType,dispatch]);

    return(
        <>
            <div className="row">
                <div>
                    <h2 className="mt-4">Reviews</h2>
                </div>

                <select onChange={(event) => setSort(event.target.value)}
                        className="float-end w-25">
                    <option value="recent">Recent</option>
                    <option value="likes">Most dislikes</option>
                    <option value="dislikes">Most likes</option>
                </select>
            </div>

            <ul className="">

                {
                    sortedData.map(reviews => {
                        return(
                            <ReviewListItem uid={user._id} review={reviews}/>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default ReviewList;