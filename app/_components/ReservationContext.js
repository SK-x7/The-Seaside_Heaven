"use client"

import { createContext, useContext, useState } from "react";

const ReservationContext=createContext();


const initialDates={from: null, to: null };

function ReservationProvider({children}) {
   
    
    
    const [cabinRanges, setCabinRanges] = useState({});

  const setRangeForCabin = (cabinId, range) => {
    setCabinRanges((prev) => ({ ...prev, [cabinId]: range }));
  };

  const resetRangeForCabin = (cabinId) => {
    setCabinRanges((prev) => {
        const updatedRanges = { ...prev };
    delete updatedRanges[cabinId] 
    return updatedRanges;
  });
  };
    
    return (
        <ReservationContext.Provider value={{cabinRanges,
            setRangeForCabin,
            resetRangeForCabin,}}>{children}</ReservationContext.Provider>
    )
}


function useReservationContext(params) {
    const context=useContext(ReservationContext);
    if(context===undefined){
        throw new Error("Context was use outside of reservation context")
    }
    
    return context;
    
}

export {ReservationProvider,useReservationContext}
