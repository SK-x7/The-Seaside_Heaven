"use client"

import { differenceInDays, isPast, isSameDay, isWithinInterval } from "date-fns";
import { useEffect, useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useIsMobile } from "../_utils/hooks/useMobile";
import { useReservationContext } from "./ReservationContext";


// export const revalidate = 5000;

function isAlreadyBooked(range, datesArr) {
  return (
    range?.from &&
    range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({settings,cabin,bookedDates}) {
  const isLgScreen=useIsMobile(1024);
  
 
  const {cabinRanges, setRangeForCabin, resetRangeForCabin}=useReservationContext();//testing
  const handleSelectRange = (newRange) => {
    setRangeForCabin(cabin.id, newRange);
  };
  
  const range = cabinRanges[cabin.id]//testing;
  
  
  let displayRange = isAlreadyBooked(range,bookedDates)?{}:range;
  
  const {regularPrice,discount}=cabin;
  const numNights=differenceInDays(displayRange?.to,displayRange?.from)
    const cabinPrice = numNights*(regularPrice-discount);


  const {minBookingLength, maxBookingLength} = settings;

  return (
    <div className="flex flex-col gap-5 justify-evenly sm:gap-0 md:justify-between w-full">
      <DayPicker
        className="pt-12  !w-full flex justify-center items-center"
        mode="range"
        onSelect={handleSelectRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        fromMonth={new Date()}
        fromDate={new Date()}
        toYear={new Date().getFullYear() + 5}
        captionLayout="dropdown"
        numberOfMonths={isLgScreen?1:2}
        disabled={(curDate)=>isPast(curDate)||bookedDates.some((date)=>isSameDay(date,curDate))}
      />

      <div className="flex items-center justify-between px-1 md:px-8 bg-accent-500 text-primary-800 h-[72px] !w-full rounded-lg sm:rounded-none">
        <div className="flex items-baseline sm:gap-2  md:gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-xl md:text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-xl md:text-2xl">${regularPrice}</span>
            )}
            <span className="">/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-2 md:px-3 py-2 md:text-2xl text-center">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p className="text-center">
                <span className="md:text-lg font-bold uppercase">Total</span>{" "}
                <span className="md:text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-primary-800 py-2 px-3 md:px-4 text-sm font-semibold"
            onClick={() => resetRangeForCabin(cabin.id)}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
