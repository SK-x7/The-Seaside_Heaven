import React from 'react'

function page() {
  return (
    <div className='w-full flex flex-col gap-3'>
        <span className='text-4xl font-semibold'>Update hotel settings</span>
    
        <form className='bg-gray-700 py-6 px-10 flex flex-col gap-3 rounded-xl'>
            <div className='w-full grid grid-cols-[16rem_1fr_1.2fr] gap-4'>
                <label className=''>Minimum Nights Per Booking</label>
                <input className='py-2 px-3 bg-transparent border rounded-2xl border-gray-500' type="number" />
                <span className='bg-red-50'></span>
            </div>
            <div className='w-full grid grid-cols-[16rem_1fr_1.2fr] gap-4'>
                <label>Maximum Nights Per Booking</label>
                <input className='py-2 px-3 bg-transparent border rounded-2xl border-gray-500' type="number"/>
                <span></span>
            </div>
            <div className='w-full grid grid-cols-[16rem_1fr_1.2fr] gap-4'>
                <label>Maximum Guests Per Booking</label>
                <input className='py-2 px-3 bg-transparent border rounded-2xl border-gray-500' type="number"/>
                <span></span>
            </div>
            <div className='w-full grid grid-cols-[16rem_1fr_1.2fr] gap-4'>
                <label>Breakfast price</label>
                <input className='py-2 px-3 bg-transparent border rounded-2xl border-gray-500' type="number"/>
                <span></span>
            </div>
        </form>
    </div>
    
  )
}

export default page