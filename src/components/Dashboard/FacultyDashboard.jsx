import React from 'react';
import Header from '../sub-components/Header';
import CreateTask from '../sub-components/CreatTask'
import AllTask from '../sub-components/AllTask';
const FacultyDashboard = (props)=>{
    return (
        <div className='h-screen w-full p-10'>
            <Header handleUser={props.handleUser} userName={props.userName}/>
            <CreateTask/>
            <AllTask/>
        </div>
    )
}

export default FacultyDashboard