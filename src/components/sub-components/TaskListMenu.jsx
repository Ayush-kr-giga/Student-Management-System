import React from 'react';

const TaskListMenu = ({data})=>{
    return (
        <div className='flex mt-10 justify-between mb-5 gap-5'>
            <div className='rounded-xl py-6 px-9 w-[30%] bg-blue-400'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.new}</h2>
                <h3 className='text-xl font-medium'>New Tasks</h3>
            </div>
            <div className='rounded-xl py-6 px-9 w-[30%] bg-green-400 '>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
                <h3 className='text-xl font-medium'>Completed Tasks</h3>
            </div>
            <div className='rounded-xl py-6 px-9 w-[30%] bg-yellow-400'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
                <h3 className='text-xl font-medium'>Active Task</h3>
            </div>
            <div className='rounded-xl py-6 px-9 w-[30%] bg-red-400'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
                <h3 className='text-xl font-medium'>Failed Task</h3>
            </div>

        </div>
    )
}

export default TaskListMenu