import Navigation from '@/app/_components/Navigation';
import Logo from '@/app/_components/Logo';

function Header() {
  return (
    <header className='border-b border-primary-900 sm:px-8 py-5 w-full'>
      <div className='flex !justify-between items-center px-2 sm:px-0 max-w-7xl !min-w-min sm:!min-w-full'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
