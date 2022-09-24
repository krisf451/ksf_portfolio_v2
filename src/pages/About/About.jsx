import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BsCircleFill } from 'react-icons/bs';

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

const About = () => {
  const [activeHeader, setActiveHeader] = useState(headers[0]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const location = useLocation();

  useEffect(() => {
    client.fetch(allSkillsQuery).then((data) => setSkills(data));
    client.fetch(allExperiencesQuery).then((data) => setExperiences(data));
    client.fetch(allTestimonialsQuery).then((data) => setTestimonials(data));
  }, []);

  useEffect(() => {
    switch (location.hash) {
      case '#about':
        setActiveHeader(headers[0]);
        break;
      case '#skills':
        setActiveHeader(headers[1]);
        break;
      case '#experience':
        setActiveHeader(headers[2]);
        break;
      case '#testimonials':
        setActiveHeader(headers[3]);
        break;
      default:
        setActiveHeader(headers[0]);
    }
  }, [location]);

  return (
    <AnimatePage>
      <div className="flex items-start lg:pt-0">
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
          </motion.div>
          <AboutNav />
          <img src="about1.jpeg" alt="about" className="rounded-md lg:w-[85%] xl:w-[90%] max-w-[800px] h-[400px] xl:h-[550px] mt-24 xl:mt-12 mx-auto hover:shadow-2xl shadow-lg" />
        </div>

        <div className="lg:overflow-y-scroll lg:h-[calc(100vh-120px)] flex flex-col w-full h-full relative">
          <div className="lg:hidden z-20 fixed h-screen flex flex-col items-center justify-center w-6 right-1 top-[-20px] bottom-0 gap-8 cursor-pointer text-[7px] text-[#13131c] dark:text-white">
            <a href="#about">
              <BsCircleFill className="sidenav-circles" />
            </a>
            <a href="#skills">
              <BsCircleFill className="sidenav-circles" />
            </a>
            <a href="#experience">
              <BsCircleFill className="sidenav-circles" />
            </a>
            <a href="#testimonials">
              <BsCircleFill className="sidenav-circles" />
            </a>
          </div>
          <div className="lg:hidden uppercase animate-slowfade">
            <h3 className="text-lg tracking-[.2em] text-center">Get to know me...</h3>
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
