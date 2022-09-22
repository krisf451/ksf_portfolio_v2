/* eslint-disable react/no-unknown-property */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

import { useDarkMode } from '../../hooks/useDarkMode';
import Socials from '../Socials';

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
    <div className="md:hidden relative flex w-full justify-between px-4 items-center h-10">
      <Link to="/about">
        <h3 className="text-xl customSlideUp uppercase">Kristian F.</h3>
      </Link>
      <AiOutlineMenu className={`${toggle && 'hidden'} cursor-pointer text-[1.6rem] customSlideUp z-1`} id="menu-btn" onClick={handleToggle} />
      <AnimatePresence mode="wait">
        {toggle && (
        <motion.div
          whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          exit={{ x: [0, 100], opacity: [1, 0] }}
          id="mobile-menu"
          className="fixed top-0 bottom-0 right-0 z-[50] w-[60%] sm:w-[50%] h-screen flex flex-col justify-end items-end bg-white dark:bg-[#13131c] dark:text-white shadow-xl"
        >
          <AiOutlineClose onClick={() => setToggle(false)} className="customSlideUp text-[2rem] cursor-pointer mt-8 mr-6" />
          <div className="flex items-center justify-center w-full py-10 text-3xl cursor-pointer">
            {darkmode ? <BsFillSunFill className="animate-slowfade" onClick={() => setDarkmode((prev) => !prev)} /> : <MdDarkMode className="animate-slowfade" onClick={() => setDarkmode((prev) => !prev)} />}
          </div>
          <div className="flex flex-col items-center justify-center w-full mb-6 tracking-[.1em] gap-4">
            <img src="headshot1.png" alt="" className="object-fill h-[75px] w-[75px] rounded-full" />
            <p className="text-sm font-extrabold">Kristian Fulkerson</p>
            <p className="text-xs font-extrabold">Full-Stack Developer</p>
            <Socials />
          </div>
          <ul className="h-full w-full flex flex-start flex-col gap-4" id="mobile-links">
            {menus.map((item, i) => (
              <li key={i} className="transition-colors duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
                <Link to={item.route} onClick={() => setToggle(false)}>
                  <p className="customSlideUp text-center py-2">{item.label}</p>
                </Link>
              </li>
            ))}
            <li className="transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-700">
              <a href="ksf_resume_new.pdf" download="ksf-resume" onClick={() => setToggle(false)} className="">
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
