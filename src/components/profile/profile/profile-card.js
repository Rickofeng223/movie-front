import React, {useEffect, useState} from "react";
// import {getUser State, updateProfile} from "../../actions/userActions";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useSearchParams} from "react-router-dom";

import '../edit-profile/edit-profile-styles.css';
import {getUserState} from "../../../actions";

const ProfileCard = () => {
    const [query, setQuery] = useSearchParams()

    const user = useSelector((s) => s.currentUser)


    return (
        <div className="row">
            <PCard
            />


            <div className="col-xl-7">
                {/*Account details card*/}
                <div className="card mb-4">
                    <div className="card-header">Account Details</div>
                    <div className="card-body">
                        <div>
                            {/*Form Group (username)*/}
                            <GroupUsername username={user.username}/>
                            {/*Form Row*/}
                            <FirstLastEmail first={user.first_name}
                                            last={user.last_name}
                                            email={user.email_id}/>

                            <Phone ph={user.phone_no}/>

                            <Link to={{pathname: '/profile/edit', search: `?uid=${user ? user._id : query.get("uid")}`}}
                                  className="btn btn-primary rounded"
                                  type="button">Edit Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileCard;


function ImageAvatar({role}) {
    return <>
    <img className="img-account-profile rounded-circle mb-2"
         src={(() => {
             switch (role) {
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
    </>
}
export function formatDate($date){

    const year = $date.getFullYear();
    const month = $date.getMonth();
    const day = $date.getDay()
    return `${(month)}/${day}/${year}`
}
function PCard({}) {
    const [query, setQuery] = useSearchParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [user, setUser] = useState({})
    const [dateString, setDateString] = useState('')

    useEffect(() => {
        (async () => {
            setUser(await getUserState(query.get("uid"), dispatch))
            //
            // if(user.DOB) {
            //     const $date = new Date(user.DOB)
            //     const year = $date.getFullYear();
            //     const month = $date.getMonth();
            //     const day = $date.getDay()
            //     setDateString(`${(month)}/${day}/${year}`)
            // }
        })()
    }, [navigate, dispatch])
    console.log(user)

    return <>
        <div className="col-xl-5">

            {/* Profile Card */}

            <div className="card mb-4 mb-xl-0">
                <div className="card-header">User Profile
                    <span className='float-right'>Role: {user.role}</span>
                </div>
                <div className="card-body text-center">
                    <ImageAvatar role={user.role}/>

                    <i className="fa-duotone fa-at"></i>{user.username}<br/><br/>
                    <PCardInfo first={user.first_name}
                               last={user.last_name
                               }
                               ph={user.phone_no
                               }
                               email={user.email_id
                               }
                               dateString={
                                   user ?
                                       formatDate(new Date(user.DOB) )
                                   : ''}/>
                </div>
            </div>
        </div>
    </>
}

function GroupUsername({username}) {
    return <>
        <div className="mb-4">
            <label className="small mb-1" htmlFor="inputUsername">Username</label>
            <input className="form-control" id="inputUsername" type="text"
                   placeholder="Enter your username" value={username} disabled
            />
        </div>
    </>
}

function FirstLastEmail({first, last, email}) {
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

function Phone({ph}) {
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

function PCardInfo({first, last, ph, email, dateString}) {
    return <>
    <span className='text-left'>
        <h2><b>{first} {last}</b></h2>
        <h5><i className="fa-solid fa-phone"></i> {ph}</h5>
        <h5><i className="fa-solid fa-envelope"></i> {email}</h5>
        <h5><i className="fa-solid fa-cake-candles"></i> {dateString}</h5>
    </span>
    </>
}