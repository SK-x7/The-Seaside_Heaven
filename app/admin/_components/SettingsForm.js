"use client"
import React from 'react'
import { updateSettingsAction } from '../_lib/actions';

function SettingsForm({settings}) {
    // if(!settings) return null;
    const {minBookingLength,maxBookingLength,maxGuestsPerBooking,breakFastPrice}=settings;
    async function handleChangedSetting(e,field){
        // console.log(e.target.value,value);
        if(!e.target.value) return null;
        await updateSettingsAction({[field]:e.target.value});
    }
    // console.log("settings:==",settings)
    
  return (
    <div className='w-full flex flex-col gap-3'>
        <span className='text-4xl font-semibold'>Update hotel settings</span>
    
        <form className='bg-gray-700 py-6 px-10 flex flex-col gap-3 rounded-xl'>
            <div className='w-full grid grid-cols-[16rem_1fr_1.2fr] gap-4'>
                <label className=''>Minimum Nights Per Booking</label>
                <input className='py-2 px-3 bg-transparent border rounded-2xl border-gray-500' type="number" defaultValue={minBookingLength} onBlur={(e)=>handleChangedSetting(e,"minBookingLength")}/>
                <span className='bg-red-50'></span>
            </div>
            <div className='w-full grid grid-cols-[16rem_1fr_1.2fr] gap-4'>
                <label>Maximum Nights Per Booking</label>
                <input className='py-2 px-3 bg-transparent border rounded-2xl border-gray-500' type="number" defaultValue={maxBookingLength} onBlur={(e)=>handleChangedSetting(e,"maxBookingLength")}/>
                <span></span>
            </div>
            <div className='w-full grid grid-cols-[16rem_1fr_1.2fr] gap-4'>
                <label>Maximum Guests Per Booking</label>
                <input className='py-2 px-3 bg-transparent border rounded-2xl border-gray-500' type="number" defaultValue={maxGuestsPerBooking} onBlur={(e)=>handleChangedSetting(e,"maxGuestsPerBooking")}/>
                <span></span>
            </div>
            <div className='w-full grid grid-cols-[16rem_1fr_1.2fr] gap-4'>
                <label>Breakfast price</label>
                <input className='py-2 px-3 bg-transparent border rounded-2xl border-gray-500' type="number" defaultValue={breakFastPrice} onBlur={(e)=>handleChangedSetting(e,"breakFastPrice")}/>
                <span></span>
            </div>
        </form>
    </div>
  )
}

export default SettingsForm