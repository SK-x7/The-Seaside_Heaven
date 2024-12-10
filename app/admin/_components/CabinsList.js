"use client"
import Filter from '@/app/_components/Filter';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'
import React from 'react'

function CabinsList({cabins}) {
    const searchParams=useSearchParams();
    const currentFilter=searchParams.get("discount");
    const sortBy=searchParams.get("sortBy")||"name-asc";
    const currentSortByOrder = sortBy.split("-")[1];
    const multiplier = currentSortByOrder==="asc" ? 1 :-1;
    const currentSortByValue = sortBy.split("-")[0];
    console.log(currentSortByValue,multiplier);
    
    let filteredCabins,sortedCabins;
    if(currentFilter==="all"){
        filteredCabins=cabins;
    }else if(currentFilter==="no-discount"){
        filteredCabins=cabins&&cabins.filter((cabin)=>cabin.discount===0);
    }else if(currentFilter==="with-discount"){
        filteredCabins=cabins&&cabins.filter((cabin)=>cabin.discount>0);
        
    }else{
        filteredCabins=cabins;
    }
    
    if(currentSortByValue!==null||currentSortByValue!==undefined){
      sortedCabins = filteredCabins.sort((a,b)=>(a[currentSortByValue]-b[currentSortByValue])*multiplier);
    }else{
      sortedCabins=filteredCabins;
    }
    
    console.log(sortedCabins);
    
  return (
    <div className='flex flex-col gap-10'>
          {
            sortedCabins&&sortedCabins.map((cabin)=>(
              <div key={cabin.id} className="bg-slate-600 grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] place-items-center justify-items-center">
                <div className='!relative aspect-[3/2] w-full'>
                  {/* <Image src={cabin.image} fill alt={`Cabin ${cabin.id} image`} className="object-cover"/> */}
                  <Image src={cabin.image} fill alt="Cabin-image" className="object-cover flex-1"/>
                </div>
                <span>{cabin.name}</span>
                <span>Fits up to {cabin.maxCapacity} guests</span>
                <span>${cabin.regularPrice}.00  </span>
                <span>{cabin.discount?`$${cabin.discount}.00`:`_`}</span>
                <div>🫥</div>
              </div>
            ))
          }
        </div>
  )
}

export default CabinsList