import React from 'react';
import {useState} from 'react';

const Login = ({handleLogin})=>{

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const submitHandler=(e)=>{
        e.preventDefault();
        handleLogin(email,password)
        setEmail('')
        setPassword('')
        
    }

    return (
        <div className='flex h-screen w-screen flex-col items-center justify-center mt-10'>
            <h2 className='text-6xl font-semibold text-white  text-center '>Stud-Manage</h2>
            <div className='border-2 border-emerald-600 p-20 rounded-xl mt-10'>
            <h2 className='text-3xl font-semibold text-emerald-700 mb-6 text-center'>Login to Your Account</h2>
                <form className='flex flex-col items-center justify-center' onSubmit={(e)=>{submitHandler(e)}}>
                    <input 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)

                    }}
                    required 
                    className='border-2 border-emerald-600 px-4 py-4 text-xl outline-none placeholder:text-gray-400 rounded-full'  
                    type='email'
                     placeholder='Enter your email'/>

                    <input 
                    value={password}
                    onChange={(e)=>{
                        setPassword(e.target.value)
                    }}
                    required 
                    className='border-2 border-emerald-600 px-4 py-4 text-xl outline-none placeholder:text-gray-400 rounded-full mt-5' 
                    type='password' 
                    placeholder='Enter your password'/>


                    <button className=' bg-emerald-600 px-4 py-4 text-xl w-60 rounded-full mt-5'>Log in </button>
                </form>
            </div>


        <div className="mt-6 p-4  rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">🔐 Dummy Credentials</h3>
    
            <div className="mb-3">
                <p className="font-medium text-sm ">👩‍🏫 Faculty</p>
                <p className="text-sm text-gray-400">Email: <span className="font-mono text-gray-400">faculty@example.com</span></p>
                <p className="text-sm text-gray-400">Password: <span className="font-mono">123</span></p>
            </div>

            <div>
                <p className="font-medium text-sm ">👩‍🎓 Students</p>
                <p className="text-sm text-gray-400">Email: <span className="font-mono">student1@example.com</span></p>
                <p className="text-sm text-gray-400">Password: <span className="font-mono">123</span></p>
                <p className="text-sm mt-1 text-gray-400 italic">* Use student2@example.com, student3@example.com... for more</p>
            </div>
        </div>

    </div>
    )
}

export default Login