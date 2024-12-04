import { PencilSquareIcon } from '@heroicons/react/24/solid';
import { format, formatDistance, isPast, isToday, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import DeleteReservation from './DeleteReservation';

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace('about ', '');

function ReservationCard({ booking,handleDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  return (
    <div className='flex flex-col border border-primary-800'>
      {/* image div */}
      <div className='relative !h-32 sm:h-32 !aspect-square'>
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className='object-cover border-r border-primary-800'
        />
      </div>

      <div className='flex-grow px-3 md:px-6 py-3 flex flex-col gap-2 md:gap-4'>
        <div className='flex items-center justify-between'>
          <h3 className='text-base sm:text-xl font-semibold'>
            {numNights} nights in Cabin {name}
          </h3>
          {isPast(new Date(startDate)) ? (
            <span className='bg-yellow-800 text-yellow-200 h-7 px-2 sm:px-3 uppercase text-xs font-bold flex justify-center !items-center rounded-sm'>
              
              past
            </span>
          ) : (
            <span className='bg-green-800 text-green-200 h-7 px-2 sm:px-3 uppercase text-xs font-bold flex items-center rounded-sm'>
              upcoming
            </span>
          )}
        </div>

        <p className='text-xs sm:text-sm md:text-lg text-primary-300'>
          {format(new Date(startDate), 'EEE, MMM dd yyyy')} (
          {isToday(new Date(startDate))
            ? 'Today'
            : formatDistanceFromNow(startDate)}
          ) &mdash; {format(new Date(endDate), 'EEE, MMM dd yyyy')}
        </p>

        <div className='flex justify-between  gap-2 md:gap-5 mt-auto items-baseline'>
          <p className='text-sm sm:text-xl font-semibold text-accent-400'>${totalPrice}</p>
          <p className='text-primary-300 sm:visible'>&bull;</p>
          <p className='text-sm sm:text-lg text-primary-300'>
            {numGuests} guest{numGuests > 1 && 's'}
          </p>
          <p className='sm:ml-auto !text-xs sm:text-sm text-primary-400 text-center w-1/2 sm:w-auto'>
            Booked {format(new Date(created_at), 'EEE, MMM dd yyyy, p')}
          </p>
        </div>
      </div>

        {
          !isPast(startDate)&&
      <div className='flex mx-2 mb-2 py-3 divide-x-2 divide-primary-800 rounded-lg border border-primary-800 md:flex-col md:border-l sm:border-primary-800 md:w-[100px]'>
          <>
        <Link
        href={`/account/reservations/edit/${id}`}
        className='group flex justify-center md:justify-start items-center gap-2 uppercase text-xs font-bold text-primary-300 md:border-b border-primary-800 flex-grow px-3 hover:bg-accent-600 transition-colors hover:text-primary-900'
        >
          <PencilSquareIcon className='h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors' />
          <span className='mt-1'>Edit</span>
        </Link>
        <DeleteReservation handleDelete={handleDelete} bookingId={id}  />
        </>
      </div>
      }
    </div>
  );
}

export default ReservationCard;
