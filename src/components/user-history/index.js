import React, {useEffect} from "react";

import history from '../data/reviewRatingCombo.json';

import LikeItem from "./like-item";
import DislikeItem from "./dislike-item";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

const UserHistory = () => {
    const dispatch = useDispatch();
    const ratings = useSelector(x=>x.ratings);
    const user = useSelector(x=>x.currentUser);
    const getRatingsByUser = async (uid, dispatch) => {
        const {data:ratings} = await axios.get(`http://localhost:4000/api/users/${uid}/ratings?user=${uid}`)

    }
    useEffect(()=>{

    },[])
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