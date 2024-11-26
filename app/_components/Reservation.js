import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector"
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm"

async function Reservation({cabin}) {
  
    
    const settings=await getSettings();
    const bookedDates=await getBookedDatesByCabinId(cabin.id);
    const session=await auth();
    return (
        <div className="grid grid-cols-2 border border-primary-800 min-h-[400px] ">
          <DateSelector 
          settings={settings}
          cabin={cabin}
          bookedDates={bookedDates}
          ></DateSelector>
          {
            session?.user?
            
            <ReservationForm cabin={cabin} user={session?.user}></ReservationForm>
            :
            <LoginMessage></LoginMessage>
            
          }
        </div>
    )
}

export default Reservation
