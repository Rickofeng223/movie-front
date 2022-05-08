import React from "react";
import {useDispatch} from "react-redux";
import {DELETE_USER, deleteUser,} from "../../../actions";
import axios from "axios";

const UserListItem = (
    {
        uid,user/* = {
            "username": "Andre.Smitham",
            "first_name": "Annabell",
            "last_name": "Mante",
            "email_id": "Joseph78@gmail.com",
            "phone_no": "654.853.6532",
            "DOB": "2022-04-25T15:21:56.000Z",
            "role": "NORMAL",
            "_id": "62680d3d3171ef12bf184978",
            "__v": 0
        }*/
    }
) => {

const dispatch = useDispatch()


    return (
        <>
            <li className="card p-4 mb-2">

                <div className="col">
                    <i className="float-end fa-solid fa-trash-can" onClick={()=> deleteUser (uid,user._id,dispatch)}/>
                </div>

                <h5>{user.first_name} {user.last_name}</h5>
                <h6><small className="text-muted">@{user.username}</small></h6>

            </li>
        </>
    )
}
export default UserListItem;