import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask =()=>{
    const [title,setTaskTitle]=useState('')
    const [date,setTaskDate]=useState('')
    const [description,setTaskDescription]=useState('')
    const [assignTo,setAssignTo]=useState('')
    const [category,setCategory]=useState('')

    // const [newTask,setNewTask]=useState({})

    
    const [userData,setUserData]=useContext(AuthContext)
    
    const submitHandler=(e)=>{
        e.preventDefault();
        
        // setNewTask({title,date,description,category,active:true,failed:false,completed:false,new:true})
        
        const data=userData

        const task={title,date,description,category,active:true,failed:false,completed:false,new:true}

        data.Students.forEach((el)=>{
            if (assignTo==el.firstName){
                // el.tasks.push(newTask)
                el.tasks.push(task)
                el.taskCounts.new=el.taskCounts.new+1
                console.log(el)
            }
        })

        setUserData(data)

        console.log(data)

        setTaskTitle('')
        setAssignTo('')
        setTaskDate('')
        setCategory('')
        setTaskDescription('')
    }

    return (
        <div className='p-5 bg=[#1c1c1c] mt-7 rounded '>
        <form 
        onSubmit={(e)=>submitHandler(e)}
        className='flex flex-wrap justify-between items-start w-full'>
            <div className='w-1/2'>
                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task title</h3>
                    <input 
                    className='text-sm py-1 px-2 rounded outline none bg-transparent border-[1px] border-gray-400 mb-4 w-4/5' type='text' placeholder='Enter the title'
                    value={title}
                    onChange={(e)=>{
                        setTaskTitle(e.target.value)
                    }}
                    />
                </div>
                <div>

                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input className='text-sm py-1 px-2 rounded outline none bg-transparent border-[1px] border-gray-400 mb-4 w-4/5' type='date'
                    value={date}
                    onChange={(e)=>{
                        setTaskDate(e.target.value)
                    }}                    
                    />
                </div>

                <div>

                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                    <input className='text-sm py-1 px-2 rounded outline none bg-transparent border-[1px] border-gray-400 mb-4 w-4/5' type='text' placeholder='Student Name'
                    value={assignTo}
                    onChange={(e)=>{
                        setAssignTo(e.target.value)
                    }}
                    />
                </div>
                <div>

                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input className='text-sm py-1 px-2 rounded outline none bg-transparent border-[1px] border-gray-400 mb-4 w-4/5' type='text' placeholder='category'
                    
                    value={category}
                    onChange={(e)=>{
                        setCategory(e.target.value)
                    }}/>
                </div>

            </div>
            <div className='w-1/2'>
                <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea className=' w-full h-44 text-sm py-2 px-4 rounded outline-none border-[1px] border-gray-400 ' name='' id='' cols=' ' rows=''
                    value={description}
                    onChange={(e)=>{
                        setTaskDescription(e.target.value)
                    }}
                > </textarea>
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>
            
        </form>
    </div>
    )
}

export default CreateTask