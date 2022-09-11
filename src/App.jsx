import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'react-hot-toast';

import { Home, About, Contact, Projects } from './pages';
import { client } from './client';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  const location = useLocation();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = `*[_type == "projects"]{
      title,
      description,
      tags,
      projectLink,
      codeLink,
      "images": images[].asset->url,
      video{
        asset->{
          _id,
          url
        }
      },
    }
    `;

    client.fetch(query).then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsFirstLoad(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="dark:bg-black min-h-screen w-full dark:text-white">
      {isFirstLoad && (
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute inset-0 h-full w-full bg-black z-20"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="z-20 absolute inset-0 flex w-full h-full justify-center items-center flex-col"
          >
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '300px' }}
              transition={{ duration: 1 }}
              className="w-[1px] bg-white"
            />
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: '100%' }}
              transition={{ duration: 1, delay: 1.6 }}
              className="w-[1px] bg-white"
            />
          </motion.div>
        </AnimatePresence>
      ) } { !isFirstLoad && (
        <>
          <Toaster />
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes key={location.pathname} location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects projects={projects} />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default App;
