"use client"
import { XMarkIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { useReservationContext } from './ReservationContext';

function ReservationReminder() {
  // CHANGE
  const {resetRange,cabinRanges}=useReservationContext();
  console.log(cabinRanges,Object.keys(cabinRanges).length,"helloooooooooooooooooooooooooooooooooooooooooooooooooooooooooo")
  if (!Object.keys(cabinRanges).length) return null;

  return (
    <div className='fixed bottom-6 left-1/2 -translate-x-1/2 py-5 px-8 rounded-full bg-accent-500 text-primary-800 text  font-semibold shadow-xl shadow-slate-900 flex gap-1 items-center'>
      <p>
        👋 Don&apos;t forget to reserve your dates 
      </p>
      <button className='rounded-full p-1 hover:bg-accent-600 transition-all' onClick={resetRange}>
        <XMarkIcon className='h-5 w-5' />
      </button>
    </div>
  );
}

export default ReservationReminder;
