import React, { useContext, createContext } from "react";
import UserBio from "./UserBio";

//For useContext
const AuthContext = createContext({
  user: {
    username: "Emmanuel",
    name: "Emmanuel Odedele",
    email: "emmaodedele@gmail.com",
    bio: "Emmanuel will become the president of Nigeria",
  },
  verified: false,
});

//UserProfile component
function UserProfile() {
  const { user, verified } = useContext(AuthContext);

  return (
    <div>
      <h1>User Profile</h1>
      <div>Username : {user.username}</div>
      <div>Name : {user.name}</div>
      <div>Email : {user.email}</div>
      <div>Verfied : {verified ? "Yes" : "No"}</div>
      <UserBio />
    </div>
  );
}

export default UserProfile;
