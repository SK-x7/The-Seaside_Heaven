"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const sortArray=[
    { value: "name-asc", label: "Sort by name (A-Z)" },
    { value: "name-desc", label: "Sort by name (Z-A)" },
    { value: "regularPrice-asc", label: "Sort by price (low first)" },
    { value: "regularPrice-desc", label: "Sort by price (high first)" },
    { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
    { value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
]



function SortCabins() {
    const pathname=usePathname();
    const router=useRouter();
    const searchParams=useSearchParams();
    const currentSortBy = searchParams.get('sortBy')||"";
    function handleChange(e) {
        const params= new URLSearchParams(searchParams.toString());
        params.set("sortBy",e.target.value);
        router.replace(`${pathname}?${params.toString()}`,{scroll:false})
    }
    
  return (
    <select className='bg-transparent' value={currentSortBy} onChange={handleChange}>
        {
            sortArray&&sortArray.map((item)=>(
                
                <option value={item.value} key={item.value}>{item.label}</option>
            ))
        }
    </select>
  )
}

export default SortCabins