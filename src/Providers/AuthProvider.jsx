import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import { signOut } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // firebase auth related

  // create user using email and pw
  const createUser = (email, password) => {
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
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

//   update user profile
  const updateUser = (displayname, photourl)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,{
        displayName : displayname,
        photoURL: photourl
    })
  }

  // Logout
  const logOut = () => {
    return signOut(auth)
  };


  // user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email : userEmail}
      setUser(currentUser);
      if(currentUser){
        // const loggedUser={email : currentUser?.email}
        axios.post('https://discy-server.vercel.app/jwt',loggedUser,{withCredentials:true})
        .then(res=>{
          // console.log(res.data)
          setLoading(false);
        })
      }else{
        axios.post('https://discy-server.vercel.app/logout',loggedUser,{withCredentials:true})
        .then(res=>{
          // console.log(res.data)
        })
      }
      
      
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    createUser,
    googleLogin,
    logOut,
    loginUser,
    updateUser,
    user,
    loading
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
