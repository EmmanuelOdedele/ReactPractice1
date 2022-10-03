import React, { useEffect, useState } from "react";
import AvatarMe from "./AvatarMe";
import {
  signInWithRedirect,
  auth,
  provider,
  getRedirectResult,
  onAuthStateChanged,
} from "../config";
import NavigationBar from "./NavigationBar";

function SignInPage() {
  const [signedIn, setSignedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);
  // Handle Sign In to firebase...
  const signIn = (event) => {
    event.preventDefault();
    signInWithRedirect(auth, provider);
  };

  // Hnadle Sign Out of firebase
  const signOut = (event) => {
    event.preventDefault();
    auth.signOut().then(() => {
      //Do something, maybe alert
    });
  };

  // Get the redirect result...
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        // Get the Result
        if (result) {
          // Set the user...
          setSignedIn(true);
        } else {
          //...
        }
      })
      .catch((error) => {
        // ...
        console.log(error);
      });
  }, []);

  // Check auth state...
  useEffect(() => {
    // Check auth state...
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Set the user...
        const { displayName, email, photoURL, uid } = user;
        setUser({ displayName, email, photoURL, uid });
        setAuthenticated(true);
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
        setAuthenticated(false);
      }
    });
  }, []);

  return (
    <section>
      {user ? (
        authenticated ? (
          <div>
            <div>
              <h2>Welcome. You are signed in.</h2>
              <AvatarMe image= {user.photoURL} />
              <div>{user.displayName}</div>
              <div>{user.email}</div>
              <NavigationBar />
              <button onClick={signOut}>Sign Out</button>
            </div>
          </div>
        ) : (
          <div>Please wait</div>
        )
      ) : (
        <div>
          <div style={signedIn ? {} : { display: "none" }}>
            Sign In successful
          </div>
          <div>
            <h2>Sign In here</h2>
            <button onClick={signIn}>Sign In</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default SignInPage;
