import React, {useState} from "react";

import ReviewList from "../review-list";
import ProfileCard from "./profile-card";

import {updateProfile} from "../../actions/userActions";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import '../edit-profile/edit-profile-styles.css';

const ProfileComponent = () => {

    const navigate = useNavigate()

    const user = useSelector((s) => s.currentUser)

    return (
        <>

            {
                user ?
                (<div className="card">
                <div className="container-xl px-4 mt-4">
                    <ProfileCard/>



                    {/* Extra actions for CRITIC and ADMIN */}
                    {/*<Link to='/profile/edit'*/}
                    {/*      className="btn btn-secondary rounded-pill">*/}
                    {/*    Edit Profile*/}
                    {/*</Link>*/}

                    {user.role === "ADMIN" ?
                        <>
                        <br/><br/>
                        <button className="btn btn-primary rounded">
                        Manage Site</button>
                        </>
                        : ''}


                    {user.role === "CRITIC" ?
                        <>
                        <div className="card mb-4 mb-xl-0">
                            <div className="card-header"><h4>Reviews</h4>
                            </div>
                            <div className="card-body"><ReviewList/></div>
                        </div>
                        </>
                        : ''}


                </div>
            </div>

                ) : navigate("/login")
            }


        </>
    );
};

export default ProfileComponent;
