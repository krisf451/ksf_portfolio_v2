import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import AnimatePage from '../../components/AnimatePage';
import AboutResume from './AboutResume';
import AboutSkills from './AboutSkills';
import AboutExperience from './AboutExperience';
import AboutTestimonials from './AboutTestimonials';
import AboutNav from './AboutNav';
import { client } from '../../client';
import { allSkillsQuery } from '../../utils/queries';

const headers = [
  { id: 1, bgLabel: 'Resume', label: 'About Me', route: '#about' },
  { id: 2, bgLabel: 'Technology', label: 'My Skills', route: '#skills' },
  { id: 3, bgLabel: 'Experience', label: 'My Jobs', route: '#experience' },
  { id: 4, bgLabel: 'Testimonials', label: 'My value', route: '#testimonials' },
];

const About = () => {
  const [activeHeader, setActiveHeader] = useState(headers[0]);
  const [skills, setSkills] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const query = allSkillsQuery;

    client.fetch(query).then((data) => setSkills(data));
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollY } = window;
  //     const about = document.querySelector('#about');
  //     const skills = document.querySelector('#skills');
  //     const experience = document.querySelector('#experience');
  //     const testimonials = document.querySelector('#testimonials');

  //     if (scrollY >= about.offsetTop && scrollY < skills.offsetTop) {
  //       setActiveHeader(headers[0]);
  //     } else if (scrollY >= skills.offsetTop && scrollY < experience.offsetTop) {
  //       setActiveHeader(headers[1]);
  //     } else if (scrollY >= experience.offsetTop && scrollY < testimonials.offsetTop) {
  //       setActiveHeader(headers[2]);
  //     } else if (scrollY >= testimonials.offsetTop) {
  //       setActiveHeader(headers[3]);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  useEffect(() => {
    if (location.hash === '#about') {
      setActiveHeader(headers[0]);
    } else if (location.hash === '#skills') {
      setActiveHeader(headers[1]);
    } else if (location.hash === '#experience') {
      setActiveHeader(headers[2]);
    } else if (location.hash === '#testimonials') {
      setActiveHeader(headers[3]);
    }
  }, [location]);

  return (
    <AnimatePage>
      <div className="flex items-start">
        <div className="hidden w-full lg:flex flex-col items-center uppercase animate-slowfade justify-center mx-2">
          <div className="relative flex items-center justify-center flex-col">
            <h2 className="text-5xl tracking-[.3em] whitespace-nowrap text-gray-300 dark:text-gray-600 animate-slideup">{activeHeader.bgLabel}</h2>
            <h2 className="absolute top-2 text-2xl font-semibold tracking-[.4em] whitespace-nowrap text-gray-800 dark:text-gray-200">
              {activeHeader?.label?.split(' ')[0]} <span className="text-blue-500">{activeHeader?.label?.split(' ')[1] && activeHeader?.label?.split(' ')[1]}</span>
            </h2>
            <h3 className="text-lg tracking-[.2em]">Get to know me...</h3>
            <AboutNav />
          </div>
          <AnimatePresence>
            <motion.img
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              src="about1.jpeg"
              alt=""
              className="rounded-md w-[500px] lg:w-[700px] h-[500px] mt-12 hover:shadow-2xl shadow-lg"
            />
          </AnimatePresence>
        </div>

        <div className="lg:overflow-y-scroll lg:h-[calc(100vh-120px)] flex flex-col w-full h-full">
          <div className="lg:hidden uppercase animate-slowfade">
            <h3 className="text-lg tracking-[.2em] text-center hidden sm:block">Get to know me...</h3>
            <div className="w-full bg-black">
              <img src="ksf_logo.png" alt="" className="w-full h-[50px] object-contain sm:hidden" />
            </div>
            <AboutNav />
          </div>
          <div className="w-full h-full">
            <AboutResume />
            <AboutSkills skills={skills} />
            <AboutExperience />
            <AboutTestimonials />
            {/*
            */}
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default About;
