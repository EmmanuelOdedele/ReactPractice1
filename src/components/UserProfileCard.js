import React from "react";
import Avatar from "./Avatar"
import "../assets/styles/card.css"

function UserProfileCard() {
  return (
    <div className="card">
      <Avatar />
      <div className="card-name">Emmanuel Odedele</div>
      <div className="card-bio">
        Emmanuel Odedele will become the president of Nigeria.
      </div>
    </div>
  );
}

export default UserProfileCard;
