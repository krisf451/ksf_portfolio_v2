/* eslint-disable react/no-unknown-property */
import { Link, useLocation } from 'react-router-dom';
import { BsDownload } from 'react-icons/bs';
import { motion } from 'framer-motion';

import DarkModeToggle from './DarkModeToggle';

const DesktopNav = ({ menus }) => {
  const location = useLocation();
  return (
    <div className="flex justify-between w-full px-4">
      <ul className="hidden md:flex items-end">
        {menus.map((item, i) => (
          <li key={i} className="px-4 cursor-pointer group">
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
      <ul className="hidden md:flex items-end">
        <li className="group">
          <a
            href="ksf_new_resume_12_11_2022.pdf"
            download="ksf-resume"
            className="customSlideUp flex items-center gap-3 whitespace-nowrap cursor-pointer pl-[.3rem]"
          >
            <BsDownload className="text-xl" />
            Download CV
          </a>
        </li>
        <DarkModeToggle />
      </ul>
    </div>
  );
};

export default DesktopNav;
