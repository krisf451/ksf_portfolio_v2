import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import AnimatePage from '../../components/AnimatePage';
import AboutResume from './AboutResume';
import AboutSkills from './AboutSkills';
import AboutExperience from './AboutExperience';
import AboutTestimonials from './AboutTestimonials';
import AboutNav from './AboutNav';
import { client } from '../../client';
import { allSkillsQuery, allExperiencesQuery, allTestimonialsQuery } from '../../utils/queries';

const headers = [
  { id: 1, bgLabel: 'Resume', label: 'About Me', route: '#about' },
  { id: 2, bgLabel: 'Technology', label: 'My Skills', route: '#skills' },
  { id: 3, bgLabel: 'Experience', label: 'My Jobs', route: '#experience' },
  { id: 4, bgLabel: 'Testimonials', label: 'My value', route: '#testimonials' },
];

const heroImages = [
  { id: 6, src: 'about1.jpeg' },
  { id: 7, src: 'about.jpeg' },
];

const About = () => {
  const [activeHeader, setActiveHeader] = useState(headers[0]);
  const [activeImage, setActiveImage] = useState(heroImages[0]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const location = useLocation();

  console.log(testimonials);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev.id === 6 ? heroImages[1] : heroImages[0]));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    client.fetch(allSkillsQuery).then((data) => setSkills(data));
    client.fetch(allExperiencesQuery).then((data) => setExperiences(data));
    client.fetch(allTestimonialsQuery).then((data) => setTestimonials(data));
  }, []);

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
          <motion.div
            key={activeHeader.id}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            className="relative flex items-center justify-center flex-col"
          >
            <h2 className="text-5xl tracking-[.3em] whitespace-nowrap text-gray-300 dark:text-gray-600 animate-slideup">{activeHeader.bgLabel}</h2>
            <h2 className="absolute top-2 text-2xl font-semibold tracking-[.4em] whitespace-nowrap text-gray-800 dark:text-gray-200">
              {activeHeader?.label?.split(' ')[0]} <span className="text-blue-500">{activeHeader?.label?.split(' ')[1] && activeHeader?.label?.split(' ')[1]}</span>
            </h2>
            <h3 className="text-lg tracking-[.2em]">Get to know me...</h3>
          </motion.div>
          <AboutNav />

          <motion.img
            key={activeImage.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.6 }}
            exit={{ opacity: 0 }}
            src={activeImage.src}
            alt=""
            className="rounded-md w-[85%] h-[500px] mt-12 hover:shadow-2xl shadow-lg"
          />
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
            <AboutExperience experiences={experiences} />
            <AboutTestimonials testimonials={testimonials} />
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default About;
