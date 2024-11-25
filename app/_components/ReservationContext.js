"use client"

import { createContext, useContext, useState } from "react";

const ReservationContext=createContext();


const initialDates={from: null, to: null };

function ReservationProvider({children}) {
    const [range,setRange]=useState(initialDates);
    const resetRange=()=>setRange(initialDates)
    
    
    return (
        <ReservationContext.Provider value={{range,setRange,resetRange}}>{children}</ReservationContext.Provider>
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
