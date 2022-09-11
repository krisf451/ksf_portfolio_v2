import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const menus = [
  { label: 'Resume', route: '#resume' },
  { label: 'Skills', route: '#skills' },
  { label: 'Experience', route: '#experience' },
  { label: 'Testimonials', route: '#testimonials' },
];

const AboutNav = () => {
  console.log('test');

  return (
    <div className="bg-gray-200 h-16 flex items-center uppercase tracking-[.2em] fixed top-[120px] w-full">
      {/* <ul className="hidden md:flex items-end h-full">
        {menus.map((item, i) => (
          <li key={i} className="px-4 cursor-pointer group bg-green-500 h-full flex justify-center items-center">
            <a href={item.route}>
              <p className="customSlideUp pl-[.3rem]">{item.label}</p>
            </a>
            {location.pathname === item.route && (
              <motion.div layoutId="border" className="border-b-4 border-gray-200" />
            )}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default AboutNav;
