import React from "react";

import history from '../data/reviewRatingCombo.json';

import LikeItem from "./like-item";
import DislikeItem from "./dislike-item";

const UserHistory = () => {

    return (
        <>
            <ul>
                {
                    history.map(item => {
                        if (item.liked) {
                            return <LikeItem reviewRating={item}/>
                        }
                        return <DislikeItem reviewRating={item}/>
                    })
                }
            </ul>
        </>
    )
};

export default UserHistory;