import React, { useContext, createContext } from "react";

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

//User bio component
function UserBio() {
  const { user, setUser } = useContext(AuthContext);
  //Update userbio on click
  const handleBioUpdate = (event) => {
    //Update user bio
    event.preventDefault();
    setUser((prev) => {
      return {
        ...prev,
        bio: "Emmanuel O. Odedele will become the president of Nigeria",
      };
    });
  };
  return (
    <div>
      <h1>User Bio</h1>
      <div>{user.bio}</div>
      <button onClick={handleBioUpdate}>Update Bio</button>
    </div>
  );
}

export default UserBio;
