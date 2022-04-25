import React from "react";
import profile from "../data/user.json";

const ProfileComponent = () => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{profile.first_name}</h2>
        </div>
      </div>
    </>
  );
};

export default ProfileComponent;
