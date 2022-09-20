import React, { useState, createContext } from "react";

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

//Define Context provider
function AuthProvider(props) {
  const [user, setUser] = useState({
    username: "Emmanuel",
    name: "Emmanuel Odedele",
    email: "emmaodedele@gmail.com",
    bio: "Emmanuel will become the president of Nigeria",
  });
  return (
    <AuthContext.Provider
      value={{
        user: user,
        verified: true,
        setUser: setUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
