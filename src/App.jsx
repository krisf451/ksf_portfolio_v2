import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

import { Home, About, Contact, Projects } from './pages';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const location = useLocation();
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFirstLoad(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="dark:bg-black min-h-screen w-full dark:text-white">
      {isFirstLoad ? (
        <>
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="absolute inset-0 h-full w-full bg-black z-20"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1, delayChildren: 2 }}
            className="z-20 absolute inset-0 flex w-full h-full justify-center items-center flex-col"
          >
            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="text-white text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] font-mono tracking-widest opacity-80 text-center">
              PROVOCATIVE
            </motion.h1>
            <p className="text-white text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[7rem] font-mono tracking-widest opacity-80 text-center">TITLE</p>
          </motion.div>
        </>
      ) : (
        <>
          <Toaster />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default App;
