import React, {useEffect, useState} from "react";

import ReviewList from "../review-list";
 import {getUserState, updateProfile} from "../../actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
 import ProfileCard from "./profile-card";



const ProfileComponent = () => {

    const navigate = useNavigate()

    const user = useSelector(e => e.currentUser)
    const [query, setQuery] = useSearchParams()
    const dispatch = useDispatch()
    useEffect(() => {
        if (user&& user._id) {
            setQuery({uid: user._id})
        } else if (query.get("uid") !== undefined) {
            getUserState(query.get("uid"),  dispatch )
        }

    }, [dispatch])


 if(!user){
    navigate("/login")
}
    return (
        <>
            {
                user &&
                <div className="card">
                <div className="container-xl px-4 mt-4">
                    <ProfileCard/>

                    {/* Extra actions for CRITIC and ADMIN */}
                    {/*<Link to='/profile/edit'*/}
                    {/*      className="btn btn-secondary rounded-pill">*/}
                    {/*    Edit Profile*/}

                  
                    {user.role === "CRITIC" &&
                        <>
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header"><h4>Reviews</h4>
                            </div>
                            <div className="card-body"><ReviewList/></div>
                        </div>
                        </>
                         }
                </div>
            </div>
            }


        </>
    );
};

export default ProfileComponent;
