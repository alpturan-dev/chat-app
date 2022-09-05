import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

function Home() {
    //Burada kaldik
    return (
        <div className='bg-gray-100 h-screen flex items-center justify-center text-slate-700'>
            <div id="container" className='flex bg-slate-300 rounded-sm w-3/4 h-4/5'>
                <Sidebar className='w-1/4' />
                <Chat className='w-3/4' />
            </div>
        </div>
    )
}

export default Home