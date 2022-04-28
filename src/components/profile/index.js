import React, {useState} from "react";

import ReviewList from "../review-list";
import {updateProfile} from "../../actions/userActions";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const ProfileComponent = () => {

    const navigate = useNavigate()

    const user = useSelector((s) => s.user)


    return (
        <>

            {
                user ?
                (<div className="card">
                <img className="card-img-top" src="/images/background.jpg" alt="popcorn banner"/>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <img className="img-thumbnail rounded-circle mr-3" src="/images/user-placeholder.png"
                             alt="person silhouette" width="150"/>
                        <h2 className="card-title mr-3">
                            {user.first_name} {user.last_name}
                        </h2>
                        <h3>
                            <small className="text-muted">@{user.username}</small>
                        </h3>
                    </div>

                    <div className="ml-2">
                        <h5 className="mt-4 mb-4">Personal information</h5>
                        <p><i className="fa-solid fa-envelope"/> {user.email_id}</p>
                        <p><i className="fa-solid fa-cake-candles"/> {user.DOB}</p>
                        <p><i className="fa-solid fa-phone"/> {user.phone_no}</p>
                    </div>

                    {user.role === "ADMIN" ? <button className="btn btn-primary rounded-pill mr-3">
                        Manage Site
                    </button> : ''}

                    <button onClick={() => {
                        navigate('/profile/edit')
                    }} className="btn btn-secondary rounded-pill">
                        Edit Profile
                    </button>

                    {user.role === "CRITIC" ? <ReviewList/> : ''}

                </div>
            </div>) : navigate("/login")
            }


        </>
    );
};

export default ProfileComponent;
