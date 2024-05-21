import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // firebase auth related
  // create user using email and pw
  const createUser = (email, password, name, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // create / login using google
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
// sign in with email and password
const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("logout Success");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  // user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    googleLogin,
    logOut,
    loginUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
