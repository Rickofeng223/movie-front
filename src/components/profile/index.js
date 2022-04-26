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
>>>>>>> 2ac7d4b987002babe09300762f52bfb56942e829
