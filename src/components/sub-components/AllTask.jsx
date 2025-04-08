import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'



const AllTask=()=>{

    const [authData,setUserData]=useContext(AuthContext)
    return (
        <div className='p-5 rounded mt-5 '>

                    <div className='flex justify-between rounded py-2 px-4 bg-emerald-500 mb-2'>
                        <h2 className='text-lg font-medium w-1/5 '>Name</h2>
                        <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
                        <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
                        <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
                        <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
                    </div>

                    <div className='h-[80%] '>
                        {authData.Students.map((el,idx)=>{
                        return (
                            <div key={idx} className='flex justify-between rounded py-2 px-4 border-2 border-emerald-400 mb-2'>
                                <h2 className='text-lg font-medium w-1/5 '>{el.firstName}</h2>
                                <h3 className='text-lg font-medium w-1/5 text-blue-400'>{el.taskCounts.active}</h3>
                                <h3 className='text-lg font-medium w-1/5 text-yellow-400'>{el.taskCounts.new}</h3>
                                <h3 className='text-lg font-medium w-1/5 text-green-400'>{el.taskCounts.completed}</h3>
                                <h5 className='text-lg font-medium w-1/5 text-red-400'>{el.taskCounts.failed}</h5>
                            </div>
                    )
                })}
                    </div>
            
        </div>
    )
}

export default AllTask