import { Suspense } from "react"
import CabinsList from "../_components/CabinsList"
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";
import Spinner from "../_components/Spinner"

export const metadata={
    "title":"Cabins"
}

export const revalidate=3000;
//this does not work because it is now rendering dynamically because of using searchParams  



async function Page({searchParams}) {
  const searchParamsObj=await searchParams;
  const filter =searchParamsObj.capacity??"all"
  return (
    <div className="!w-full">
      <h1 className="text-3xl mb-2 sm:text-4xl sm:mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-sm sm:text-lg mb-10">
        
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little home
        away from home. The perfect spot for a peaceful, calm vacation. Welcome
        to paradise.
      </p>
      <div className="flex !w-full justify-end mb-8">
        
      <Filter></Filter>
      </div>
      
      
      <Suspense fallback={<Spinner></Spinner>} key={filter}>
        
        <CabinsList filter={filter}></CabinsList>
        <ReservationReminder></ReservationReminder>
      </Suspense>
        
      </div>
)
}



export default Page
