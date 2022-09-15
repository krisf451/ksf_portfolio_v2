import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const menus = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Projects', route: '/projects' },
  { label: 'Contact', route: '/contact' },
];

const Navbar = () => (
  <nav className="w-full mb-10 h-[80px] flex justify-between items-end py-4 uppercase tracking-[.2em] font-medium text-gray-600 dark:text-gray-200 transition-colors duration-300 ease-in-out">
    <DesktopNav menus={menus} />
    <MobileNav menus={menus} />
  </nav>
);
export default Navbar;
