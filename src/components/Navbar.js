import React from 'react'

function Navbar() {
    return (
        <div className='flex flex-row p-3 h-20 items-center border rounded justify-between bg-slate-500 text-slate-300'>
            <span className="logo font-bold text-xl">Chat App</span>
            <div className="user flex gap-2 items-center">
                <img className='border w-8 h-8'
                    src="https://images.pexels.com/photos/1322185/pexels-photo-1322185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John</span>
                <button className='p-2 rounded border cursor-pointer bg-slate-600 hover:bg-slate-500 text-slate-200'>Logout</button>
            </div>
        </div>
    )
}

export default Navbar