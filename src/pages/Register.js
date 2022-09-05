import React from 'react'
import file from '../assets/file.svg'

function Register() {
    return (
        <div id='form-container' className='bg-gray-100 h-screen flex items-center justify-center text-slate-700'>
            <div id="form-wrapper" className=' shadow-lg py-12 px-20 bg-gray-300 border rounded flex flex-col'>
                <span className='text-3xl my-3 font-bold opacity-80 text-slate-900'>Chat App</span>
                <span className='text-xl mt-2 mb-3'>Register</span>
                <form className='flex flex-col justify-between gap-7'>
                    <input className='w-80 p-3 rounded-sm' type="text" placeholder='User name' />
                    <input className='w-80 p-3 rounded-sm' type="email" placeholder='E-mail' />
                    <input className='w-80 p-3 rounded-sm' type="password" placeholder='Password' />
                    <label htmlFor="file" className='cursor-pointer gap-2 flex flex-row  items-center hover:text-slate-500'> <img src={file} alt="" className='w-10' />Choose Avatar </label>
                    <input id='file' className=' hidden' type="file" />
                    <button className='w-1/2 rounded p-2 bg-slate-600 text-white hover:bg-slate-500'>
                        Sign Up
                    </button>
                </form>
                <p className='my-3 opacity-50 underline'>You do have an account? Login!</p>
            </div>
        </div>
    )
}

export default Register