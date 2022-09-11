/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdDarkMode } from 'react-icons/md';
import { BsFillSunFill } from 'react-icons/bs';
import { motion, AnimatePresence } from 'framer-motion';

import { useDarkMode } from '../../hooks/useDarkMode';

const MobileNav = ({ toggle, setToggle, menus }) => {
  const [darkmode, setDarkmode] = useDarkMode();
  return (
    <div className="md:hidden relative flex w-full justify-between px-4 items-center h-10">
      <Link to="/about">
        <h3 className="text-xl customSlideUp uppercase">Kristian F.</h3>
      </Link>
      <AnimatePresence mode="wait">
        {!toggle && (
        <motion.div
          whileInView={{ x: [50, 0] }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          exit={{ x: [0, 50], opacity: [1, 0] }}
          className="h-10 w-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800"
          onClick={() => setToggle(true)}
        >
          <AiOutlineMenu className="cursor-pointer text-[1.4rem]" id="menu-btn" />
        </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {toggle && (
        <motion.div
          whileInView={{ x: [300, 0], opacity: [0, 1] }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          exit={{ x: [0, 300], opacity: [1, 0] }}
          id="mobile-menu"
          className="fixed top-0 bottom-0 right-0 z-[50] w-[60%] h-screen flex flex-col justify-end items-end bg-white dark:bg-gray-900 dark:text-white shadow-xl"
        >
          <AiOutlineClose onClick={() => setToggle(false)} className="customSlideUp text-[2rem] cursor-pointer mt-8 mr-4" />
          <div className="flex items-center justify-center w-full py-10 text-3xl cursor-pointer">
            {darkmode ? <BsFillSunFill className="animate-slowfade" onClick={() => setDarkmode((prev) => !prev)} /> : <MdDarkMode className="animate-slowfade" onClick={() => setDarkmode((prev) => !prev)} />}
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
