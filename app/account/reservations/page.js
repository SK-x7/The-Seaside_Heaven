import ReservationList from "@/app/_components/ReservationList";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import Link from "next/link";

export const metadata ={
  title:"Reservations"

}

export default async function Page() {
  // CHANGE
  const session =await auth();
  const bookings = await getBookings(session.user?.guestId);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 sm:mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="sm:text-base text-lg">
          You have no reservations yet. Check out our{" "}
          <Link className="underline text-accent-500" href="/cabins">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : 
      <ReservationList bookings={bookings}></ReservationList>
      // (
      //   <ul className="space-y-6">
      //     {bookings.map((booking) => (
      //       <ReservationCard booking={booking} key={booking.id} />
      //     ))}
      //   </ul>
      // )
      }
    </div>
  );
}

