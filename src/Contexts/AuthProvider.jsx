import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../Firebase';


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
        signOutUser
        
    }

    return (
        <div>
            <AuthContext value={authInfo}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;