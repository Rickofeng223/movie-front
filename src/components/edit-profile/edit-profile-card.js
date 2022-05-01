import React, {useEffect, useRef, useState} from "react";

import ReviewList from "../review-list";
import {getUserState, updateProfile} from "../../actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useSearchParams} from "react-router-dom";

import '../edit-profile/edit-profile-styles.css';
import profile from "../profile";
import {formatDate} from "../profile/profile-card";


const EditProfileCard = () => {

    const navigate = useNavigate()
    const [dateString , setDateString]=useState('')


    const user = useSelector(e => e.currentUser)
    const [query, setQuery] = useSearchParams()
    const dispatch = useDispatch()
    useEffect(() => {
        if (user&& user._id) {
            setQuery({uid: user._id})
        } else if (query.get("uid") !== undefined) {
            getUserState(query.get("uid"),  dispatch )
        }
        // if(user.DOB){
        //     const $date = new Date(user.DOB)
        //     const year = $date.getFullYear();
        //     const month = $date.getMonth();
        //     const day = $date.getDay()
        //     setDateString(`${(month)}/${day}/${year}`)
        // }

    }, [dispatch])

    const {username:_username,
    first_name: _first_name,
        last_name: _last_name,
        email_id: _email_id,
        phone_no: _phone_no,
        DOB: _DOB,
    } = user

    const [username, setUsername] = useState(_username || '')
    const [first_name, setFirstname] = useState(_first_name || '')
    const [last_name, setLastname] = useState(_last_name || '')
    const [email_id, setEmail] = useState(_email_id || '')
    const [phone_no, setPhone] = useState(_phone_no || '')
    const [DOB, setDob] = useState(_DOB || '')

    const onChangeUsername = (e) => setUsername(e.target.value)
    const onChangeFirstname = (e) => setFirstname(e.target.value)
    const onChangeLastname = (e) => setLastname(e.target.value)
    const onChangeEmail = (e) => setEmail(e.target.value)
    const onChangePhone = (e) => setPhone(e.target.value)
    // const onChangeDob = (e) => {
    //     setDob(new Date(e.target.value))
    // }
    // const saveProfileButton =

    return (
        <div className="row">
            <div className="col-xl-5">

                {/* Profile Card */}

                <div className="card mb-4 mb-xl-0">
                    <div className="card-header">User Profile
                        <span className='float-right'>Role: {user.role}</span>
                    </div>
                    <div className="card-body text-center">
                        <img className="img-account-profile rounded-circle mb-2"
                             src={(() => {
                                 switch (user.role) {
                                     case "NORMAL":
                                         return "http://bootdey.com/img/Content/avatar/avatar1.png";

                                     case "ADMIN" :
                                         return "http://bootdey.com/img/Content/avatar/avatar2.png";

                                     case "CRITIC" :
                                         return "http://bootdey.com/img/Content/avatar/avatar3.png";

                                     default:
                                         return "";
                                 }
                             })()} alt=""/>
                        <br/>

                        <i className="fa-duotone fa-at"></i>{user.username}<br/><br/>
                        <span className='text-left'>
                                    <h2><b>{user.first_name} {user.last_name}</b></h2>
                                    <h5><i className="fa-solid fa-phone"></i> {user.phone_no}</h5>
                                    <h5><i className="fa-solid fa-envelope"></i> {user.email_id}</h5>
                                    <h5><i
                                        className="fa-solid fa-cake-candles"></i>

                                        {   user ?
                                            formatDate(new Date(user.DOB) )
                                            : ''}</h5>
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
                                <label className="small mb-1" htmlFor="inputUsername">Username (how your name
                                    will appear to other users on the site)</label>
                                <input className="form-control" id="inputUsername" type="text"
                                       placeholder="Enter your username" value={username}
                                       onChange={onChangeUsername}/>
                            </div>
                            {/*Form Row*/}
                            <div className="row gx-3 mb-3">

                                <div className="col-md-6">
                                    <label className="small mb-1" htmlFor="inputFirstName">First name</label>

                                    <input className="form-control" id="inputFirstName" type="text"
                                           placeholder="Enter your first name" value={first_name}
                                           onChange={onChangeFirstname}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <label className="small mb-1" htmlFor="inputLastName">Last name</label>
                                    <input className="form-control" id="inputLastName" type="text"
                                           placeholder="Enter your last name" value={last_name}
                                           onChange={onChangeLastname}
                                    />
                                </div>
                            </div>


                            <div className="mb-3">
                                <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                                <input className="form-control" id="inputEmailAddress" type="email"
                                       placeholder="Enter your email address" value={email_id}
                                       onChange={onChangeEmail}
                                />
                            </div>

                            <div className="row gx-3 mb-3">

                                <div className="col-md-6">
                                    <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                                    <input className="form-control" id="inputPhone" type="tel"
                                           placeholder="Enter your phone number" value={phone_no}
                                           onChange={onChangePhone}
                                    />
                                </div>

                                {/*<div className="col-md-6">*/}
                                {/*    <label className="small mb-1" htmlFor="inputBirthday">Date of birth</label>*/}
                                {/*    <input className="form-control" id="inputBirthday" type="date"*/}
                                {/*           name="birthday" placeholder="Enter your birthday" value={(new Date(DOB)).toISOString().substring(0,10)}*/}
                                {/*           onChange={onChangeDob}*/}
                                {/*    />*/}
                                {/*</div>*/}
                            </div>

                            {/*navigate(`/profile/${user._id}`)*/}
                            <button
                                onClick={ async () => {
                                     await updateProfile({...user, first_name, last_name, email_id, phone_no}, {navigate, dispatch})
                                    navigate({ pathname:'/profile', search:`?uid=${user ? user._id : query.get("uid")}`})
                                }}
                                className="btn btn-primary rounded bg-success"
                                type="button">Save changes
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default EditProfileCard;