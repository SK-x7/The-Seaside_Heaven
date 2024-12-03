"use client"
import { differenceInDays } from "date-fns";
import { redirect } from "next/navigation";
import Image from "next/image";
import { createReservationAction } from "../_lib/actions";
import { useReservationContext } from "./ReservationContext";
import SubmitButton from "./SubmitButton";
function ReservationForm({cabin,user}) {
  // CHANGE
  const {cabinRanges,resetRangeForCabin}=useReservationContext();

  const {maxCapacity,regularPrice,discount,id:cabinId} = cabin;
  const startDate = cabinRanges[cabin?.id]?.from
  const endDate = cabinRanges[cabin?.id]?.to;
  const numNights = differenceInDays(endDate,startDate);
  const cabinPrice = numNights*(regularPrice-discount);

  const bookingData={
    startDate,
    endDate,
    numNights,
    cabinId,
    cabinPrice
  }
  
  const createReservationActionWithData =createReservationAction.bind(null,bookingData)
  
  return (
    <div className='scale-[1.01] w-full'>
      <div className='bg-primary-800 text-primary-300 px-5 sm:px-16 py-2 flex justify-between items-center'>
        <p>Logged in as</p>

        <div className='flex gap-4 items-center'>
          <div className="relative h-8 w-8 rounded-full">
            
          <Image
            // Important to display google profile images     cl
            // className="flex-1"
            fill
            referrerPolicy='no-referrer'
            className='object-cover flex-1 rounded-full'
            src={user?.image}
            alt={user?.name||"User image"}
            />
            </div>
          <p>{user.name}</p>
        </div>
      </div>

      <form 
      action={
        async (formData)=>{
          await createReservationActionWithData(formData);
          resetRangeForCabin(cabin?.id);
          redirect("/cabins/thankyou");
        }
      }
      
      
      className='bg-primary-900 py-10 px-5 sm:px-16 text-lg flex gap-5 flex-col'>
        <div className='space-y-2'>
          <label htmlFor='numGuests'>How many guests?</label>
          <select
            name='numGuests'
            id='numGuests'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            required
          >
            <option value='' key=''>
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>

        <div className='space-y-2'>
          <label htmlFor='observations'>
            Anything we should know about your stay?
          </label>
          <textarea
            name='observations'
            id='observations'
            className='px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm'
            placeholder='Any pets, allergies, special requirements, etc.?'
          />
        </div>

        <div className='flex justify-end items-center gap-6'>
          
          {
            !startDate&&!endDate?
            <p className='text-primary-300 text-base'>Start by selecting dates</p>
            :



<SubmitButton pendingLabel={"Reserving Cabin..."}>Reserve now</SubmitButton>
          }
          
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
