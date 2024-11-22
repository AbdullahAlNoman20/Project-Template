import axios from 'axios';

import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { app } from "../Firebase-Config/Firebase";
  

  export const AuthContext = createContext(null);
  
  const auth = getAuth(app);


  const AuthProvider = ({ children }) => {

    // Track user current Position
    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);
  




  
   // Create New User 
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    // Login the user
    const signInUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };

  //Logout the User 
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };

  // Google Login
  const googleProvider = new GoogleAuthProvider();
  
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };





// User already Login or not
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        if(currentUser){
          axios.post(`http://localhost:5000/jwt`,{ email: currentUser.email})
          .then(data =>{
            if(data.data){
              localStorage.setItem('access-token', data?.data?.token)
              setLoading(false);
            }
          })
        }
        else{
          localStorage.removeItem("access-token");
          setLoading(false);
        }
      });
      return () => {
        unSubscribe();
      };
    }, []);



// Send All the Information
    const authInfo = {
      user,
      createUser,
      signInUser,
      logOut,
      loading,
      googleLogin,
    };



    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };

  //Props Validation 
  AuthProvider.propTypes = {
    children: PropTypes.object,
  };
  
  export default AuthProvider;

/*
About Context API:
when we declare some state in a center point and use this state or value from every where.
then its called context API. Like a Tower

by using useContext  

and finally Rap the router in the main.jsx file


*/