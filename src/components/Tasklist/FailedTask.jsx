import React from "react";

const FailedTask=({data})=>{
    return (
    <div className='flex-shrink-0 p-5 h-full w-[300px] bg-blue-500 rounded-xl '>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-400 px-3 py-1 rounded text-sm'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        <div className="flex justify-between mt-4">
            <button className="bg-red-600 py-1 px-2 text-sm">Failed</button>
            
        </div>
    </div>
    )
}

export default FailedTask