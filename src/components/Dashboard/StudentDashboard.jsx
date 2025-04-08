import React from 'react';
import Header from '../sub-components/Header';
import TaskListMenu from '../sub-components/TaskListMenu';
import TaskList from '../Tasklist/Tasklist';

const StudentDashboard = (props)=>{
    return (
    <div className='p-10 h-screen'>
        <Header handleUser={props.handleUser} data={props.data} userName={props.userName}/>
        <TaskListMenu handleUser={props.handleUser} data={props.data}/>
        <TaskList handleUser={props.handleUser} data={props.data}/>
    </div>

)
}

export default StudentDashboard