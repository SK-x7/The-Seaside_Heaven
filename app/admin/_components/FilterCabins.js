"use client"
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React from 'react'

function FilterCabins() {
    const router = useRouter();
    const pathname= usePathname();
    const serachParams= useSearchParams();
    const currentFilter = serachParams.get("discount")??"all"
    
    function handleFilter(val){
      if(!val) val="all";
      const params=new URLSearchParams();
      params.set("discount",val);
      router.replace(`${pathname}?${params.toString()}`,{scroll:false});
    }
    // function handleFilter(val) {
    //     if (!val) val = "all";
    //     const params = new URLSearchParams();
    //     params.set("discount", val);
    
    //     // Debounce or throttle navigation calls if needed
    //     if (val !== currentFilter) {
    //         router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    //     }
    // }
    
    
    const filtersArray=[
        {
            label:"All",
            value:"all"
        },
        {
            label:"No discount",
            value:"no-discount"
        },
        {
            label:"With discount",
            value:"with-discount"
        },
    ]
    
    
  return (
    <div className='flex gap-2 max-h-min border px-2 py-1'>
        {
            filtersArray&&filtersArray.map((filter)=>(
                
                <button onClick={()=>handleFilter(filter.value)} className={`${currentFilter===filter.value?"bg-purple-600":""} px-2 text-sm rounded-lg disabled:cursor-not-allowed hover:bg-purple-600`} disabled={filter.value===currentFilter} key={filter.value}>{filter.label}</button>
            ))
        }
        </div>
  )
}

export default FilterCabins