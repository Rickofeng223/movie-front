import React, {useEffect, useState} from "react";
//import reviews from "../data/reviews.json"
import ReviewListItem from "./review-list-item";
import {useSelector} from "react-redux";

const sortRecent = (a, b) => b.recent - a.recent;
const sortLikes = (a, b) => b.likes - a.likes;
const sortDislikes = (a, b) => b.dislikes - a.dislikes;

const ReviewList = () => {

    const reviews = useSelector(s=>s.reviews);
    let sorted = reviews
    let [sortedData, setSorted] = useState(sorted);
    //const [data, setData] = useState([]);
    const [sortType, setSort] = useState('recent');

    useEffect(() => {

        let temp;
        switch (sortType) {
            case "recent":
                temp = sortedData.sort(sortRecent);
                setSorted(temp);
                break
            case "likes":
                temp = sortedData.sort(sortLikes);
                setSorted(temp);
                break
            case "dislikes":
                temp = sortedData.sort(sortDislikes);
                setSorted(temp);
                break
        }
        //const sorted = reviewsData.sort((a, b) => b[sortType] - a[sortType]);
        //temp = sortedData.sort((a, b) => b[sortType] - a[sortType]);
        //setSorted(temp);
        //setReviewsData(sorted);


    }, [sortType]);

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
                    sorted.map(reviews => {
                        return(
                            <ReviewListItem review={reviews}/>
                        );
                    })
                }
            </ul>
        </>
    );
}

export default ReviewList;