"use client"

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useIsMobile } from '../_utils/hooks/useMobile';
import SignOutButton from './SignOutButton';

const navLinks = [
  {
    name: 'Home',
    href: '/account',
    icon: <HomeIcon className='h-6 w-6 sm:h-5 sm:w-5 text-primary-600' />,
  },
  {
    name: 'Reservations',
    href: '/account/reservations',
    icon: <CalendarDaysIcon className='h-6 w-6 sm:h-5 sm:w-5 text-primary-600' />,
  },
  {
    name: 'Guest profile',
    href: '/account/profile',
    icon: <UserIcon className='h-6 w-6 sm:h-5 sm:w-5 text-primary-600' />,
  },
];

function SideNavigation() {
  const pathname=usePathname();
  const isMobile=useIsMobile();
  
  return (
    <nav className='border-r border-primary-900'>
      <ul className='flex flex-col gap-2 h-full text-lg'>
        {navLinks.map((link) => (
          <li key={link.name} className="pr">
            <Link
              className={`!p-2 rounded-md sm:rounded-none sm:w-auto sm:py-3 sm:px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex !justify-center !items-center gap-4 font-semibold text-primary-200 
              ${pathname===link.href&&"bg-primary-900"}
              `}
              href={link.href}
            >
              {link.icon}
              {
                !isMobile&&
              <span>{link.name}</span>
              }
            </Link>
          </li>
        ))}

        <li className='mt-auto'>
          
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
