import React, {useEffect, useState} from "react";
//import reviews from "../data/reviews.json"
import ReviewListItem from "./review-list-item";
import {useSelector} from "react-redux";

const ReviewList = () => {
    const [data, setData] = useState(useSelector(state => state.reviews))
    //const [data, setData] = useState([]);
    const [sortType, setSort] = useState('recent');

    useEffect(() => {

        const sorted = data.sort((a, b) => b[sortType] - a[sortType]);
        setData(sorted);


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
                    data.map(reviews => {
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