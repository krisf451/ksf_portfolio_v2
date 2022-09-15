import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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

  useEffect(() => {
    console.log('here');
  }, [activeHeader]);

  return (
    <AnimatePage>
      <div className="flex">
        <div className="hidden w-full lg:flex flex-col items-center uppercase animate-slowfade justify-center">
          <div className="relative flex items-center justify-center flex-col">
            <h2 className="text-5xl tracking-[.3em] whitespace-nowrap text-gray-300 dark:text-gray-600 animate-slideup">{activeHeader.bgLabel}</h2>
            <h2 className="absolute top-2 text-2xl font-semibold tracking-[.4em] whitespace-nowrap text-gray-800 dark:text-gray-200">
              {activeHeader?.label?.split(' ')[0]} <span className="text-blue-500">{activeHeader?.label?.split(' ')[1] && activeHeader?.label?.split(' ')[1]}</span>
            </h2>
            <h3 className="text-lg tracking-[.2em]">Get to know me...</h3>
            <AboutNav />
          </div>
          <img src="bw_cutout.png" alt="" className="h-full object-contain" />
        </div>

        <div className="lg:overflow-y-scroll lg:h-[calc(100vh-120px)]">
          <div className="relative w-full lg:hidden flex-col items-center gap-4 uppercase animate-slowfade">
            <div className="relative flex items-center justify-center flex-col">
              <h3 className="text-lg tracking-[.2em]">Get to know me...</h3>
              <AboutNav />
            </div>
          </div>
          <div className="">
            <AboutResume />
            <AboutSkills skills={skills} />
            <AboutExperience />
            <AboutTestimonials />
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default About;
