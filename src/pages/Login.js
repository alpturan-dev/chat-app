import React from 'react'

function Login() {
    return (
        <div id='form-container' className='bg-gray-100 h-screen flex items-center justify-center text-slate-700'>
            <div id="form-wrapper" className=' shadow-lg py-12 px-20 bg-gray-300 border rounded flex flex-col'>
                <span className='text-3xl my-3 font-bold opacity-80 text-slate-900'>Chat App</span>
                <span className='text-xl mt-2 mb-3'>Login</span>
                <form className='flex flex-col justify-between gap-7'>
                    <input className='w-80 p-3 rounded-sm' type="email" placeholder='E-mail' />
                    <input className='w-80 p-3 rounded-sm' type="password" placeholder='Password' />
                    <button className='w-1/2 rounded p-2 bg-slate-600 text-white hover:bg-slate-500'>
                        Sign in
                    </button>
                </form>
                <p className='my-3 opacity-50 underline'>You don't have an account? Register!</p>
            </div>
        </div>
    )
}

export default Login