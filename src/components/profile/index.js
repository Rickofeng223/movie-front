import React from "react";
import profile from "../data/user.json";

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
          <img className="img-thumbnail rounded-circle" src="/images/user-placeholder.png" alt="person silhouette" width="150"/>
          <h2 className="card-title">
              {user.first_name} {user.last_name}
          </h2>
           <h3>
               <small className="text-muted">@{user.username}</small>
           </h3>

        </div>
      </div>
    </>
  );
};

export default ProfileComponent;

