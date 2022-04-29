import React, {useState} from "react";

import ReviewList from "../review-list";
import {updateProfile} from "../../actions/userActions";
import {useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

import '../edit-profile/edit-profile-styles.css';

const ProfileCard = () => {
    const navigate = useNavigate()
    const user = useSelector((s) => s.currentUser)

    return(
        <div className="row">
            <div className="col-xl-5">

                {/* Profile Card */}

                <div className="card mb-4 mb-xl-0">
                    <div className="card-header">User Profile
                        <span className='float-right'>Role: {user.role}</span>
                    </div>
                    <div className="card-body text-center">
                        <img className="img-account-profile rounded-circle mb-2"
                             src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/><br/>
                        {/*<div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB*/}
                        {/*</div>*/}
                        {/*<button className="btn btn-primary" type="button" disabled={true}>Upload new image</button>*/}
                        <i className="fa-duotone fa-at"></i>{user.username.toLowerCase()}<br/><br/>
                        <span className='text-left'>
                                    <h2><b>{user.first_name}   {user.last_name}</b></h2>
                                    <h5><i className="fa-solid fa-phone"></i><h6 className='disp-inline'> {user.phone_no}</h6></h5>
                                    <h5><i className="fa-solid fa-envelope"></i><h6 className='disp-inline'> {user.email_id.toLowerCase()}</h6></h5>
                                    <h5><i className="fa-solid fa-cake-candles"></i><h6 className='disp-inline'> {(new Date(user.DOB)).toISOString().substring(0,10)}</h6></h5>
                                    </span>
                    </div>
                </div>
            </div>


            <div className="col-xl-7">
                {/*Account details card*/}
                <div className="card mb-4">
                    <div className="card-header">Account Details</div>
                    <div className="card-body">
                        <form>
                            {/*Form Group (username)*/}
                            <div className="mb-4">
                                <label className="small mb-1" htmlFor="inputUsername">Username</label>
                                <input className="form-control" id="inputUsername" type="text"
                                       placeholder="Enter your username" value={user.username} disabled
                                />
                            </div>
                            {/*Form Row*/}
                            <div className="row gx-3 mb-3">

                                <div className="col-md-6">
                                    <label className="small mb-1" htmlFor="inputFirstName">First name</label>

                                    <input className="form-control" id="inputFirstName" type="text"
                                           placeholder="Enter your first name" value={user.first_name} disabled
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                                    <input className="form-control" id="inputLastName" type="text"
                                           placeholder="Enter your last name" value={user.last_name} disabled
                                    />
                                </div>
                            </div>


                            <div className="mb-3">
                                <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                <input className="form-control" id="inputEmailAddress" type="email"
                                       placeholder="Enter your email address" value={user.email_id} disabled
                                />
                            </div>

                            <div className="row gx-3 mb-3">

                                <div className="col-md-6">
                                    <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                    <input className="form-control" id="inputPhone" type="tel"
                                           placeholder="Enter your phone number" value={user.phone_no} disabled
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="small mb-1" htmlFor="inputBirthday">Date of birth</label>
                                    <input className="form-control" id="inputBirthday" type="date"
                                           name="birthday" placeholder="Enter your birthday"
                                           value={(new Date(user.DOB)).toISOString().substring(0,10)} disabled
                                    />
                                </div>
                            </div>

                            <Link to='/profile/edit' className="btn btn-primary red-button rounded"
                                  type="button">Edit Profile</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileCard;