import React, { Suspense } from "react";
// import Avatar from "./Avatar"
import "../assets/styles/card.css"

// Lazy load the Avatar Component
const Avatar = React.lazy(()=>import("./Avatar"))

function UserProfileCard() {
  return (
    // normal div below
    // <div className="card">
    //   <Avatar />
    //   <div className="card-name">Emmanuel Odedele</div>
    //   <div className="card-bio">
    //     Emmanuel Odedele will become the president of Nigeria.
    //   </div>
    // </div>

    //new div to practise lazy loading on Avatar
    <div className="card">
      <Suspense fallback={<div>Loading...</div>}>
        <Avatar/>
      </Suspense>
      <div className="card-name">Emmanuel Odedele</div>
      <div className="card-bio">
        Emmanuel Odedele will become the president of Nigeria.
      </div>
    </div>
  );
}

export default UserProfileCard;
