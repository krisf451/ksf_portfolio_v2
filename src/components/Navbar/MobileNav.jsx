/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

import { useDarkMode } from '../../hooks/useDarkMode';

const MobileNav = ({ menus }) => {
  const [toggle, setToggle] = useState(false);
  const [darkmode, setDarkmode] = useDarkMode();

  useEffect(() => {
    const closeMobileMenu = (e) => {
      if (e.target.id !== 'mobile-menu' && e.target.id !== 'mobile-links' && e.target.id !== 'menu-btn') {
        setToggle(false);
      }
    };

    window.addEventListener('click', closeMobileMenu);
    return () => {
      window.removeEventListener('click', closeMobileMenu);
    };
  }, []);

  const handleToggle = (e) => {
    e.stopPropagation();
    setToggle(true);
  };

  return (
    <div className="md:hidden relative flex w-full justify-end px-4 items-center h-10 z-50">
      <AiOutlineMenu className={`${toggle && 'hidden'} cursor-pointer text-[1.6rem] customSlideUp z-20 fixed top-[28px] right-[25px]`} id="menu-btn" onClick={handleToggle} />
      <AnimatePresence mode="wait">
        {toggle && (
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          exit={{ x: [0, 100], opacity: [1, 0] }}
          id="mobile-menu"
          className="fixed top-0 bottom-0 right-0 z-[50] w-[70%] sm:w-[50%] min-h-screen bg-white dark:bg-[#13131c] dark:text-white shadow-xl"
        >
          <div className="flex justify-between w-full items-center p-6 text-2xl">
            <img src="headshot1.png" alt="" className="object-fill h-[50px] w-[50px] rounded-full" />
            <p className="cursor-pointer">
              {darkmode ? <BsFillSunFill className="animate-slowfade" onClick={() => setDarkmode((prev) => !prev)} /> : <MdDarkMode className="animate-slowfade" onClick={() => setDarkmode((prev) => !prev)} />}
            </p>
            <AiOutlineClose onClick={() => setToggle(false)} className="customSlideUp text-[1.5rem] cursor-pointer" />
          </div>
          <ul className="h-full w-full flex flex-col gap-4 mt-20" id="mobile-links">
            {menus.map((item, i) => (
              <li key={i} className="transition-colors duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link to={item.route} onClick={() => setToggle(false)}>
                  <p className="customSlideUp text-center py-2">{item.label}</p>
                </Link>
              </li>
            ))}
            <li className="transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
              <a href="ksf_resume_new.pdf" download="ksf-resume" onClick={() => setToggle(false)}>
                <p className="text-center py-2 customSlideUp">
                  Download CV
                </p>
              </a>
            </li>
          </ul>
        </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNav;
