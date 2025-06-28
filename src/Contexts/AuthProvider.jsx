import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState()
// newUser
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
// signInUser
const signInUser=(email,password)=>{
     setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}
// google
const signInWithGoogle=()=>{
setLoading(true)
return signInWithPopup(auth,provider)
}
// updateUser

   const updateUserProfile = profileInfo => {
        return updateProfile(auth.currentUser, profileInfo);
    }


// logOut

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
// onAuth
useEffect(()=>{
const unSubscribe=onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
    setLoading(false)
})
return ()=>{
    unSubscribe()
}
},[])

    const authInfo={
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle,
        updateUserProfile
        
    }

    return (
        <div>
            <AuthContext value={authInfo}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;