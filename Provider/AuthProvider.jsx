"use client"
import React, { createContext, useEffect, useState } from 'react';

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from '@/firebase.init';


export const authContext = createContext()
const auth = getAuth(app)


export default function AuthProvider({children}) {

    const [user,setUser] = useState(null) ;
    const googleProvider = new GoogleAuthProvider()

     console.log(user);
     

     useEffect(() => {
        const authSubscribe = onAuthStateChanged(auth,currentUser => {
               setUser(currentUser)

                return () => {
                     return authSubscribe()
                }
        } )
     },[])


     const creatUser = (email,password) => {
         return createUserWithEmailAndPassword(auth,email,password)
     }

     const logIn = (email,password) => {
         return signInWithEmailAndPassword(auth,email,password)
     }

     const googleLogIn = () => {
         return signInWithPopup(auth,googleProvider)
     }


     const logOut = () => {
         return signOut(auth)
     }

     const updateUserProfile = (name,photoURL) => {
         return updateProfile(auth.currentUser,{
             displayName : name,
             photoURL : photoURL
         })
     }



    const authInfo = {
      user,
      creatUser,
      logIn,
      googleLogIn,
      logOut,
      updateUserProfile
    }



  return (
      <authContext.Provider value={authInfo}>
           {children}
      </authContext.Provider>
  )
}
