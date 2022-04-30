import React, {useEffect, useRef, useState} from "react";

import ReviewList from "../review-list";
import {updateProfile} from "../../actions/userActions";
import {useSelector} from "react-redux";
import {Link, useNavigate, useParams, useSearchParams} from "react-router-dom";

import '../edit-profile/edit-profile-styles.css';

const ProfileCard = () => {
    const [query,setQuery]= useSearchParams()
    const navigate = useNavigate()
    const user = useSelector((s) => s.currentUser)
    // alert(JSON.stringify(user))
    const{uid} = useParams()
    // useEffect(() => {if(!uid){navigate('/')}}, [navigate])

    let dateString = new Date(user.DOB)

    return(
        <div className="row">
            <PCard role={user.role || ''}
                   first={user.first_name || ''}
                   last={user.last_name || ''}
                   email={user.email_id || ''}
                   username={user.username || ''}
                   ph={user.phone_no || ''}
                   dateString={dateString || ''}/>


            <div className="col-xl-7">
                {/*Account details card*/}
                <div className="card mb-4">
                    <div className="card-header">Account Details</div>
                    <div className="card-body">
                        <form>
                            {/*Form Group (username)*/}
                            <GroupUsername username={user.username}/>
                            {/*Form Row*/}
                            <FirstLastEmail first={user.first_name}
                                            last={user.last_name}
                                            email={user.email_id}/>

                            <Phone ph={user.phone_no}/>

                            <Link to={{ pathname:'/profile/edit', search:`?uid=${user ? user._id : query.uid}`}} className="btn btn-primary rounded"
                                  type="button">Edit Profile</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileCard;


function ImageAvatar({role}){
    return <>
    <img className="img-account-profile rounded-circle mb-2"
                src={(()=>{
                    switch(role){
                        case "NORMAL": return "http://bootdey.com/img/Content/avatar/avatar1.png";

                        case "ADMIN" : return "http://bootdey.com/img/Content/avatar/avatar2.png";

                        case "CRITIC" : return "http://bootdey.com/img/Content/avatar/avatar3.png";

                        default: return "";
                    }})()} alt=""/>
    <br/>
    </>
}

function PCard({role,first, last, email, username, ph,  dateString}){
    return<>
        <div className="col-xl-5">

            {/* Profile Card */}

            <div className="card mb-4 mb-xl-0">
                <div className="card-header">User Profile
                    <span className='float-right'>Role: {role}</span>
                </div>
                <div className="card-body text-center">
                    <ImageAvatar role={role}/>

                    <i className="fa-duotone fa-at"></i>{username}<br/><br/>
                    <PCardInfo first={first}
                               last={last}
                               ph={ph}
                               email={email}
                               dateString={dateString}/>
                </div>
            </div>
        </div>
    </>
}

function GroupUsername({username}){
    return <>
        <div className="mb-4">
            <label className="small mb-1" htmlFor="inputUsername">Username</label>
            <input className="form-control" id="inputUsername" type="text"
                   placeholder="Enter your username" value={username} disabled
            />
        </div>
    </>
}

function FirstLastEmail({first,last,email}){
    return <>
        <div className="row gx-3 mb-3">

            <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputFirstName">First name</label>

                <input className="form-control" id="inputFirstName" type="text"
                       placeholder="Enter your first name" value={first} disabled
                />
            </div>

            <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                <input className="form-control" id="inputLastName" type="text"
                       placeholder="Enter your last name" value={last} disabled
                />
            </div>
        </div>


        <div className="mb-3">
            <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
            <input className="form-control" id="inputEmailAddress" type="email"
                   placeholder="Enter your email address" value={email} disabled
            />
        </div>
    </>
}

function Phone({ph}){
    return <>
        <div className="row gx-3 mb-3">

            <div className="col-md-6">
                <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                <input className="form-control" id="inputPhone" type="tel"
                       placeholder="Enter your phone number" value={ph} disabled
                />
            </div>

        </div>
    </>
}

function PCardInfo({first, last, ph, email, dateString}){
    return<>
    <span className='text-left'>
        <h2><b>{first}   {last}</b></h2>
        <h5><i className="fa-solid fa-phone"></i> {ph}</h5>
        <h5><i className="fa-solid fa-envelope"></i> {email}</h5>
        <h5><i className="fa-solid fa-cake-candles"></i> {dateString.toLocaleDateString()}</h5>
    </span>
    </>
}