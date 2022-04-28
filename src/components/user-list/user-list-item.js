import React from "react";


const UserListItem = (
    {
        user = {
            "username": "Andre.Smitham",
            "first_name": "Annabell",
            "last_name": "Mante",
            "email_id": "Joseph78@gmail.com",
            "phone_no": "654.853.6532",
            "DOB": "2022-04-25T15:21:56.000Z",
            "role": "NORMAL",
            "_id": "62680d3d3171ef12bf184978",
            "__v": 0
        }
    }
) => {



    return (
        <>
            <li className="card p-4 mb-2">
                <h5>{user.first_name} {user.last_name}</h5>
                <h6><small className="text-muted">@{user.username}</small></h6>

            </li>
        </>
    )
}
export default UserListItem;