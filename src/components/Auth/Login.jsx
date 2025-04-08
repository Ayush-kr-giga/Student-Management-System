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
        <div className='flex h-screen w-screen flex-col items-center justify-center'>
            <h2 className='text-6xl font-semibold text-white mb-20 text-center'>Stud-Manage</h2>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
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

        </div>
    )
}

export default Login