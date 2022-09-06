import React from 'react'

function SearchBar() {
    return (
        <div id="search">
            <div id="search-form" className='border p-3 flex justify-center items-center'>
                <span className=' text-lg mr-2'>Search:</span>
                <input type="text" placeholder='Find a user' className='rounded bg-slate-200 w-2/4 p-2 focus:outline-none focus:outline-slate-400' />
            </div>
            <div className="userChat">
                <img src="https://images.pexels.com/photos/1322185/pexels-photo-1322185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" className='w-10 h-10' />
                <div id="user-chat-info">
                    <span>John</span>
                </div>
            </div>
        </div>
    )
}

export default SearchBar