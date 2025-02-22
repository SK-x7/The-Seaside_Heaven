"use client"
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid';
import { signOutAction } from '../_lib/actions';
import { useIsMobile } from '../_utils/hooks/useMobile';

function SignOutButton() {
  const isMobile = useIsMobile(500);
  return (
    <form action={signOutAction}>
      
    <button className='!p-2 rounded-md sm:rounded-none sm:w-auto md:py-3 md:px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 w-full justify-center min-[501px]:justify-start'>
      <ArrowRightStartOnRectangleIcon className='h-5 w-5 text-primary-600'></ArrowRightStartOnRectangleIcon>
      {
        !isMobile&&
      <span>Sign out</span>
      }
    </button>
    </form>
  );
}

export default SignOutButton;
