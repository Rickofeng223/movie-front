import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../../actions/userActions";
import {useNavigate} from "react-router-dom";

import './edit-profile-styles.css';

import EditProfileCard from "./edit-profile-card";

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