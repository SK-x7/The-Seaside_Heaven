import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector"
import ReservationForm from "./ReservationForm"

async function Reservation({cabin}) {
    const settings=await getSettings();
    const bookedDates=await getBookedDatesByCabinId(cabin.id);
    return (
        <div className="grid grid-cols-2 border border-primary-800 min-h-[400px] ">
          <DateSelector 
          settings={settings}
          cabin={cabin}
          bookedDates={bookedDates}
          ></DateSelector>
          <ReservationForm cabin={cabin}></ReservationForm>
        </div>
    )
}

export default Reservation
