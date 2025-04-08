import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';


export const AuthContext=createContext()


const AuthProvider = ({children})=>{
        // localStorage.clear()
        const [userData,setUserData]=useState(null);

        useEffect(()=>{
            setLocalStorage()
            const {Students,Faculty}=getLocalStorage()
            setUserData({Students,Faculty})
            },[])

            return (

        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
            
    )
}

export default AuthProvider