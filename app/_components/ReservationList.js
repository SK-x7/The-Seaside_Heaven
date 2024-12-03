"use client"

import ReservationCard from "./ReservationCard"
import {useOptimistic} from "react"
import { deleteReservationAction } from "../_lib/actions";

function ReservationList({bookings}) {
    const [optimisticBookings,optimisticDeleteBooking]=useOptimistic(bookings,(curBookings,bookingId)=>{
        return curBookings.filter((booking)=>booking.id!==bookingId)
    });
    
    
    async function handleDelete(bookingId) {
        optimisticDeleteBooking(bookingId)
        await deleteReservationAction(bookingId)
    }
    
    return (
        <ul className="space-y-3 sm:space-y-6">
          {optimisticBookings.map((booking) => (
            <ReservationCard booking={booking} handleDelete={handleDelete} key={booking.id} />
          ))}
        </ul>
    )
}

export default ReservationList
