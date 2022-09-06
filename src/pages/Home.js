import React from 'react'
import Sidebar from '../components/Sidebar'
import Chat from '../components/Chat'

function Home() {
    //Burada kaldik
    return (
        <div className='bg-slate-100 h-screen flex items-center justify-center text-slate-700'>
            <div id="container" className='flex flex-row bg-slate-300 rounded-sm w-11/12 h-4/5'>
                <div className='w-1/3 border'>
                    <Sidebar />
                </div>
                <div className='w-2/3' >
                    <Chat />
                </div>
            </div>
        </div>
    )
}

export default Home