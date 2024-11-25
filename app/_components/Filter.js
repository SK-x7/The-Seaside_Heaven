"use client"

import { usePathname, useSearchParams,useRouter } from "next/navigation";

const filtersArray=[
    {
        type:"all",
        text:"All cabins"   
    },
    {
        type:"small",
        text:`1-3 Guests`   
    },
    {
        type:"medium",
        text:"4-7 Guests"   
    },
    {
        type:"large",
        text:"8-12 Guests"   
    }

]


function Filter() {
    const searchParams=useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    
    const activeFilter = searchParams.get("capacity")??"all"
    
    async function handleFilter(filter) {
        const params=await new URLSearchParams(searchParams);
        params.set("capacity",filter);
        router.replace(`${pathname}?${params.toString()}`,{scroll:false})
          
        // alert(filter);
    }
    
    if(!filtersArray.length)    return null;
    
    return (
        <div className="border border-primary-800 flex">
            {/* <button className="px-5 py-2 hover:bg-primary-700" 
            onClick={()=>handleFilter("all")}
            >All cabins</button>
            <button className="px-5 py-2 hover:bg-primary-700"
            onClick={()=>handleFilter("small")}
            >1&ndash;3 Guests</button>
            <button className="px-5 py-2 hover:bg-primary-700"
            onClick={()=>handleFilter("medium")}
            >4&ndash;7 Guests</button>
            <button className="px-5 py-2 hover:bg-primary-700"
            onClick={()=>handleFilter("large")}
            >8&ndash;12 Guests</button> */}
            
            {
                filtersArray.length&&filtersArray.map((filter)=>(
                    <Button key={filter?.type} handleFilter={handleFilter} filter={filter.type} activeFilter={activeFilter}>{filter.text}</Button>
                ))
            }
            
            
        </div>
    )
}

function Button({filter,handleFilter,activeFilter,children}) {
    // alert(children);
    return <button className={`px-5 py-2 hover:bg-primary-700 ${filter===activeFilter?"bg-primary-700 text-primary-50":""}`}
            onClick={()=>handleFilter(filter)}
            >{`${children}`}</button>
}


export default Filter
