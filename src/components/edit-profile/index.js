 
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../../actions/userActions";
import {useNavigate} from "react-router-dom";

import './edit-profile-styles.css';

import EditProfileCard from "./edit-profile-card";

// const EditProfileComponent = () => {
//
//     const navigate = useNavigate()
//     const dispatch = useDispatch()
//     const user = useSelector(s => s.currentUser)
//
//     const [username, setUsername] = useState(user.username)
//     const [first_name, setFirstname] = useState(user.first_name)
//     const [last_name, setLastname] = useState(user.last_name)
//     const [email_id, setEmail] = useState(user.email_id)
//     const [phone_no, setPhone] = useState(user.phone_no)
//     const [DOB, setDob] = useState(user.DOB)
//
//     const onChangeUsername = (e) => setUsername(e.target.value)
//     const onChangeFirstname = (e) => setFirstname(e.target.value)
//     const onChangeLastname = (e) => setLastname(e.target.value)
//     const onChangeEmail = (e) => setEmail(e.target.value)
//     const onChangePhone = (e) => setPhone(e.target.value)
//     const onChangeDob = (e) => setDob(e.target.value)
//
//     return <>
//
//
//         {/*
//         <input type={"text"} placeholder={username} value={username} onChange={onChangeUsername}></input>
//         <br/>
//         <input type={"text"} placeholder={first_name} value={first_name} onChange={onChangeFirstname}></input>
//         <br/>
//         <input type={"text"} placeholder={last_name} value={last_name} onChange={onChangeLastname}></input>
//         <br/>
//         <input type={"text"} placeholder={email_id} value={email_id} onChange={onChangeEmail}></input>
//         <br/>
//         <input type={"text"} placeholder={phone_no} value={phone_no} onChange={onChangePhone}></input>
//         <br/>
//         <input type={"text"} placeholder={DOB} value={DOB} onChange={onChangeDob}></input>
//         <br/>
//         <button onClick={() => {
//             updateProfile({...user, first_name, last_name, email_id, phone_no, DOB}, {navigate, dispatch})
//         }}>
//             Save
//         </button>
//
//         */}
//
//
//         <div className="container-xl px-4 mt-4">
//
//             <hr className="mt-0 mb-4"/>
//                 <div className="row">
//                     <div className="col-xl-4">
//
//                         {/* Profile Card */}
//
//                         <div className="card mb-4 mb-xl-0">
//                             <div className="card-header">Profile Picture</div>
//                             <div className="card-body text-center">
//                                 <img className="img-account-profile rounded-circle mb-2"
//                                      src="http://bootdey.com/img/Content/avatar/avatar1.png" alt=""/>
//                                     <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB
//                                     </div>
//                                     <button className="btn btn-primary" type="button" disabled={true}>Upload new image</button>
//                             </div>
//                         </div>
//                     </div>
//
//
//                     <div className="col-xl-8">
//                         {/*Account details card*/}
//                         <div className="card mb-4">
//                             <div className="card-header">Account Details</div>
//                             <div className="card-body">
//                                 <form>
//                                     {/*Form Group (username)*/}
//                                     <div className="mb-3">
//                                         <label className="small mb-1" htmlFor="inputUsername">Username (how your name
//                                             will appear to other users on the site)</label>
//                                         <input className="form-control" id="inputUsername" type="text"
//                                                placeholder="Enter your username" value={username}
//                                                onChange={onChangeUsername} />
//                                     </div>
//                                     {/*Form Row*/}
//                                     <div className="row gx-3 mb-3">
//
//                                         <div className="col-md-6">
//                                             <label className="small mb-1" htmlFor="inputFirstName">First name</label>
//
//                                             <input className="form-control" id="inputFirstName" type="text"
//                                                    placeholder="Enter your first name" value={first_name}
//                                                    onChange={onChangeFirstname}
//                                             />
//                                         </div>
//
//                                         <div className="col-md-6">
//                                             <label className="small mb-1" htmlFor="inputLastName">Last name</label>
//                                             <input className="form-control" id="inputLastName" type="text"
//                                                    placeholder="Enter your last name" value={last_name}
//                                                    onChange={onChangeLastname}
//                                             />
//                                         </div>
//                                     </div>
//
//
//                                     <div className="mb-3">
//                                         <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
//                                         <input className="form-control" id="inputEmailAddress" type="email"
//                                                placeholder="Enter your email address" value={email_id}
//                                                onChange={onChangeEmail}
//                                         />
//                                     </div>
//
//                                     <div className="row gx-3 mb-3">
//
//                                         <div className="col-md-6">
//                                             <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
//                                             <input className="form-control" id="inputPhone" type="tel"
//                                                    placeholder="Enter your phone number" value={phone_no}
//                                                    onChange={onChangePhone}
//                                             />
//                                         </div>
//
//                                         <div className="col-md-6">
//                                             <label className="small mb-1" htmlFor="inputBirthday">Date of birth</label>
//                                             <input className="form-control" id="inputBirthday" type="date"
//                                                    name="birthday" placeholder="Enter your birthday" value={(new Date(DOB)).toISOString().substring(0,10)}
//                                                    onChange={onChangeDob}
//                                             />
//                                         </div>
//                                     </div>
//
//                                     <button onClick={() => {
//                                         updateProfile({...user, first_name, last_name, email_id, phone_no, DOB}, {navigate, dispatch})
//                                     }}
//                                         className="btn btn-primary" type="button">Save changes</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//         </div>
//
//
// </>
//
// }

const EditProfileComponent = () => {


    return <>
        <div className='card'>
        <div className="container-xl px-4 mt-4">
            <EditProfileCard/>
        </div>

        </div>
        </>

        }
export default EditProfileComponent