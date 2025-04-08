import React, { useState } from 'react';

const Header = (props)=>{

    // const [username,setUsername]=useState('')
    // const data=props.data
    // if(!data){
    //     setUsername('Admin')
    // }else{
    //     setUsername(data.firstName)
    // }

    // const username=props.userName
    // console.log(props.userName)
    const logOutUser=()=>{
        localStorage.setItem('loggedInUser','')
        props.handleUser('')
        // window.location.reload()
    }
    return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>{props.userName}👋</span></h1>
        <button className='text-lg font-medium text-white bg-red-600 px-5 py-2 rounded-sm'  onClick={logOutUser}>Log Out</button>
    </div>
 )
}

export default Header