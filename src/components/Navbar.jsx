/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsDownload } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

import DarkModeToggle from './DarkModeToggle';

const menus = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Projects', route: '/projects' },
  { label: 'Contact', route: '/contact' },
];

const Navbar = ({ hoverOnRoute, hoverOnOther }) => {
  const [toggle, setToggle] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const closeMobileMenu = (e) => {
      console.log('hi', e.target.id);
      if (toggle && e.target.id !== 'mobile-menu' && e.target.id !== 'mobile-links' && e.target.id !== 'menu-btn') {
        setToggle(false);
      }
    };

    window.addEventListener('click', closeMobileMenu);
    return () => {
      window.removeEventListener('click', closeMobileMenu);
    };
  }, []);

  return (
    <nav className="w-full mb-10 h-[80px] flex justify-between items-end py-4 uppercase tracking-[.2em] font-medium text-gray-600 dark:text-gray-200 transition-colors duration-300 ease-in-out">
      <ul className="hidden md:flex items-end">
        {menus.map((item, i) => (
          <li key={i} className="px-4 cursor-pointer group" onMouseEnter={hoverOnRoute} onMouseLeave={hoverOnOther}>
            <Link to={item.route}>
              <p className="customSlideUp pl-[.3rem]">{item.label}</p>
            </Link>
            {location.pathname === item.route ? (
              <motion.div layoutId="border" className="border-b-4 border-gray-200" />
            ) : (
              <div className="h-0 w-0 opacity-0 transition-all duration-300 ease-in-out group-hover:w-full group-hover:bg-black dark:group-hover:bg-white group-hover:h-[3px] group-hover:opacity-100 group-hover:mt-1" />
            )}
          </li>
        ))}
      </ul>
      <ul className="md:flex hidden items-end">
        <li className="group" onMouseEnter={hoverOnRoute} onMouseLeave={hoverOnOther}>
          <a href="ksf_resume_new.pdf" download="ksf-resume" className="customSlideUp flex items-center gap-3 whitespace-nowrap cursor-pointer pl-[.3rem]">
            <BsDownload className="text-xl" />
            Download CV
          </a>
        </li>
        <DarkModeToggle />
      </ul>

      <div className="md:hidden relative flex w-full justify-between px-4 items-center">
        <Link to="/about">
          <h3 className="text-xl customSlideUp uppercase">Kristian F.</h3>
        </Link>
        <AiOutlineMenu onClick={() => setToggle(true)} className={`cursor-pointer text-[1.4rem] animate-slideup ${toggle && 'hidden'}`} id="menu-btn" />
        <AnimatePresence>
          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              exit={{ x: [0, 300], opacity: [1, 0] }}
              id="mobile-menu"
              className="sidebar"
            >
              <AiOutlineClose onClick={() => setToggle(false)} className="customSlideUp text-[1.8rem] cursor-pointer mt-6" />
              <ul className="h-full w-full flex flex-start flex-col" id="mobile-links">
                {menus.map((item, i) => (
                  <li key={i} className="m-4">
                    <Link to={item.route} onClick={() => setToggle(false)}>
                      <p className="customSlideUp pl-[.3rem]">{item.label}</p>
                    </Link>
                  </li>
                ))}
                <li className="m-4">
                  <a href="ksf_resume_new.pdf" download="ksf-resume" className="customSlideUp" onClick={() => setToggle(false)}>
                    Download CV
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
