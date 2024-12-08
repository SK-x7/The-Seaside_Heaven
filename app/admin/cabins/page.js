import { getCabins } from '@/app/_lib/data-service';
import Image from 'next/image';
import CabinsList from '../_components/CabinsList';
import FilterCabins from '../_components/FilterCabins';

async function page() {
  const cabins=await getCabins();
  console.log("Cabins :",cabins);
  
  
  
  
 
  return (
    <div className='w-full flex flex-col gap-3'>
      <div className='w-full flex justify-between'>
        
        <span className='text-4xl font-semibold'>All Cabins</span>
        <FilterCabins></FilterCabins>
      </div>
    
        
    
    <div className=''>
      <div className='grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] place-items-center justify-items-center'>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </div>
        <CabinsList cabins={cabins}></CabinsList>
    </div>
    <div className='bg-slate-700'>
      <button className='py-2 px-3 bg-purple-600'>Add new cabin</button>
    </div>
    </div>
  )
}

export default page