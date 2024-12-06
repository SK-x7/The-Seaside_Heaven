import React from 'react'

function page() {
  return (
    <div className='w-full flex flex-col gap-3'>
        <span className='text-4xl font-semibold'>Create a new user</span>
    
        <form className='bg-gray-700 py-6 px-10 rounded-xl'>
            <div className='w-full flex flex-col gap-3'>
                
            <div className='w-full grid grid-cols-[16rem_1fr_1.2fr] justify-center items-center gap-4 pb-2 border-b-[1px] border-neutral-400'>
                <label className=''>Full name</label>
                <input className='py-2 px-3 bg-transparent border rounded-2xl border-gray-500' type="number" />
                <span className='bg-red-50'></span>
            </div>
            <div className='w-full grid grid-cols-[16rem_1fr_1.2fr] justify-center items-center gap-4 pb-2 border-b-[1px] border-neutral-400'>
                <label>Email address</label>
                <input className='py-2 px-3 bg-transparent border rounded-2xl border-gray-500' type="number"/>
                <span></span>
            </div>
            <div className='w-full grid grid-cols-[16rem_1fr_1.2fr] justify-center items-center gap-4 pb-2 border-b-[1px] border-neutral-400'>
                <label>password (min 8 characters)</label>
                <input className='py-2 px-3 bg-transparent border rounded-2xl border-gray-500' type="number"/>
                <span></span>
            </div>
            <div className='w-full grid grid-cols-[16rem_1fr_1.2fr] justify-center items-center gap-4 pb-2 border-b-[1px] border-neutral-400'>
                <label>Repeat password</label>
                <input className='py-2 px-3 bg-transparent border rounded-2xl border-gray-500' type="number"/>
                <span></span>
            </div>
            </div>
            <div className='flex justify-end gap-3 pt-3'>
                <button className='py-3 px-4 bg-transparent border'>Cancel</button>
                <button className='py-3 px-4 bg-purple-400'>Create new User</button>
            </div>
        </form>
    </div>
  )
}

export default page