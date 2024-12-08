"use client"

import SignOutButton from '@/app/_components/SignOutButton';
import { useIsMobile } from '@/app/_utils/hooks/useMobile';
import {
  CalendarDaysIcon,
  Cog6ToothIcon,
  HomeIcon,
  HomeModernIcon,
  UsersIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from "../icon.png"

const navLinks = [
  {
    name: 'Home',
    href: '/admin',
    icon: <HomeIcon className='h-6 w-6 sm:h-5 sm:w-5 text-primary-600' />,
  },
  {
    name: 'Bookings',
    href: '/admin/bookings',
    icon: <CalendarDaysIcon className='h-6 w-6 sm:h-5 sm:w-5 text-primary-600' />,
  },
  {
    name: 'Cabins',
    href: '/admin/cabins',
    icon: <HomeModernIcon className='h-6 w-6 sm:h-5 sm:w-5 text-primary-600' />
  },
  {
    name: 'Users',
    href: '/admin/users',
    icon: <UsersIcon className='h-6 w-6 sm:h-5 sm:w-5 text-primary-600' />
  },
  {
    name: 'Settings',
    href: '/admin/settings',
    icon: <Cog6ToothIcon className='h-6 w-6 sm:h-5 sm:w-5 text-primary-600' />
  },
];

function AdminNavigation() {
  const pathname=usePathname();
  const isMobile=useIsMobile(500);
  
  return (
    <nav className='border-r border-primary-900 w-[20rem] flex flex-col h-full py-5 gap-5'>
        <div className='h-[10rem] w-full flex justify-center items-center'>
            
        <div className='relative h-full w-full'>
            
            <Image src={Logo} fill alt='Logo' className='object-contain'/>
        </div>
        </div>
      <ul className='flex flex-col gap-2 text-lg  h-full'>
        
        
        
        
        
        
        
        
        {navLinks.map((link) => (
          <li key={link.name} className="pr">
            <Link
              className={`!p-2 rounded-md sm:rounded-none sm:w-auto sm:py-3 sm:px-5 hover:bg-primary-900 hover:text-primary-100 transition-colors flex !justify-center !items-center min-[501px]:!justify-start gap-4 font-semibold text-primary-200 
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

        <li className='md:mt-auto'>
          
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavigation;
