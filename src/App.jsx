import React, { useContext, useEffect, useState } from "react";

import Login from './components/Auth/Login'
import StudentDashboard from './components/Dashboard/StudentDashboard'
import FacultyDashboard from './components/Dashboard/FacultyDashboard'
import { AuthContext } from "./context/AuthProvider";
// import { data } from "autoprefixer";
// import { getLocalStorage, setLocalStorage } from "./utils/localStorage";


const App= ()=>{

  const [user,setUser]=useState(null);
  const [loggedInUserData,setLoggedInUserData]=useState(null);
  
  const [authData,setUserData] = useContext(AuthContext)

  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser')
    if (loggedInUser){
      const userData=JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
    }
  ,[])



  const handleLogin=(email,password)=>{
    if (authData && authData.Faculty.find((el)=> el.email==email && el.password==password)){
      const faculty=authData.Faculty.find((el)=> el.email==email && el.password==password)
      setUser('faculty')
      setLoggedInUserData(faculty)
      localStorage.setItem('loggedInUser',JSON.stringify({role:'faculty',data:faculty}))
    }else if (authData && authData.Students.find((el)=> el.email==email && el.password==password)){
      const student=authData.Students.find((el)=> el.email==email && el.password==password)
      if(student){
        setUser('student')
        setLoggedInUserData(student)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'student',data:student}))
      }
    }else{
      alert('Invalid Credentials')
    }

    // console.log(loggedInUserData.firstName)
  }

  return (
  <>
  {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user=='faculty'?<FacultyDashboard handleUser={setUser} userName={loggedInUserData.firstName}/>:(user=='student'?<StudentDashboard handleUser={setUser} data={loggedInUserData} userName={loggedInUserData.firstName}/>:null)}
  </>

)
}

export default App