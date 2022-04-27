import React from "react";

import ReviewList from "../review-list";

const ProfileComponent = () => {

    const user = {
        "username": "Amelie_Wisozk62",
            "first_name": "Stan",
            "last_name": "Johns",
            "email_id": "Mohammad.Lind28@hotmail.com",
            "phone_no": "(229) 154-2603 x041",
            "DOB": "2022-04-25T23:05:45.000Z",
            "role": "ADMIN",
            "_id": "62680d3d3171ef12bf184970",
            "__v": 0
    }

  return (
    <>
      <div className="card">
          <img className="card-img-top" src="/images/background.jpg" alt="popcorn banner"/>
        <div className="card-body">
            <div className="d-flex align-items-center">
                <img className="img-thumbnail rounded-circle mr-3" src="/images/user-placeholder.png" alt="person silhouette" width="150"/>
                <h2 className="card-title mr-3">
                    {user.first_name} {user.last_name}
                </h2>
                <h3>
                    <small className="text-muted">@{user.username}</small>
                </h3>
            </div>

            <div className="ml-2">
                <h5 className="mt-4 mb-4">Personal information</h5>
                <p><i className="fa-solid fa-envelope"/> {user.email_id}</p>
                <p><i className="fa-solid fa-cake-candles"/> {user.DOB}</p>
                <p><i className="fa-solid fa-phone"/> {user.phone_no}</p>
            </div>

            {user.role === "CRITIC" ? <ReviewList/> : ''}

        </div>
      </div>


    </>
  );
};

export default ProfileComponent;

