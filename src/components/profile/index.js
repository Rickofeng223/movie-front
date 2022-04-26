import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

const ProfileComponent = () => {
    const user = useSelector((state) => state.profile);

    return(
        <>
            <div className="card">
                <img className="card-img-top" src="/public/images/background.jpg"
                     alt="default popcorn background"
                    height="200px"
                    width="100%"/>
                <div className="card-body">
                    <h2 className="card-title">{user.first_name} {user.last_name}</h2>
                    <h3>{user.username}</h3>

                </div>
            </div>
        </>
    )
}

export default ProfileComponent;