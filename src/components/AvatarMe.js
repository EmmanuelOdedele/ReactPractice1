import React from "react";

function AvatarMe({ image = "", alt = "Picture" }) {
  return <img className="card-image" src={image} alt={alt} />;
}

export default AvatarMe;
