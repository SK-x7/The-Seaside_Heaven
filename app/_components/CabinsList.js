import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard"


async function CabinsList({filter}) {
  await filter;
    const cabins = await getCabins();
    if(!cabins.length)  return null;
    let cabinsAfterFilter;
    if(filter==="all"){
      cabinsAfterFilter=cabins;
    }else if(filter==="small"){
      cabinsAfterFilter=cabins.filter((cabin)=>(
        cabin.maxCapacity<=3
      ));
    }
    else if(filter==="medium"){
      cabinsAfterFilter=cabins.filter((cabin)=>(
        cabin.maxCapacity>=5&&cabin.maxCapacity<8
      ));
    }else if(filter==="large"){
      cabinsAfterFilter=cabins.filter((cabin)=>(
        cabin.maxCapacity>=8
      ));
    }else{
      cabinsAfterFilter=cabins
    }
    
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabinsAfterFilter.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
    )
}

export default CabinsList
