import { useState } from 'react';

import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const menus = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Projects', route: '/projects' },
  { label: 'Contact', route: '/contact' },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //   const closeMobileMenu = (e) => {
  //     console.log('hi', e.target.id);
  //     if (toggle && e.target.id !== 'mobile-menu' && e.target.id !== 'mobile-links' && e.target.id !== 'menu-btn') {
  //       setToggle(false);
  //     }
  //   };

  //   window.addEventListener('click', closeMobileMenu);
  //   return () => {
  //     window.removeEventListener('click', closeMobileMenu);
  //   };
  // }, []);

  return (
    <nav className="w-full mb-10 h-[80px] flex justify-between items-end py-4 uppercase tracking-[.2em] font-medium text-gray-600 dark:text-gray-200 transition-colors duration-300 ease-in-out dark:opacity-90">
      <DesktopNav menus={menus} />
      <MobileNav toggle={toggle} setToggle={setToggle} menus={menus} />
    </nav>
  );
};

export default Navbar;
