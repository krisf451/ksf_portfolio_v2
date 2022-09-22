import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { HomeExtraText, HomeNameText, HomePChild, HomePContainer } from '../../utils/variants';
import AnimatePage from '../../components/AnimatePage';

const Home = () => {
  const text1 = 'Hi there,';
  const text2 = 'My name is';
  const letters1 = Array.from(text1);
  const letters2 = Array.from(text2);

  return (
    <AnimatePage>
      <motion.div className="flex flex-col justify-center items-start pl-6 md:pl-12 lg:pl-20 xl:pl-32 pt-32 sm:pt-56 overflow-hidden">
        <motion.p
          variants={HomePContainer}
          initial="hidden"
          animate="visible"
          className="text-3xl lg:text-[45px] xl:text-[50px]"
        >
          {letters1.map((letter, index) => (
            <motion.span variants={HomePChild} key={index} className="text-gray-600 dark:text-gray-300">
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          variants={HomePContainer}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-[45px] lg:text-[60px] xl:text-[75px] font-semibold py-4 lg:py-8 xl:py-12"
        >
          {letters2.map((letter, index) => (
            <motion.span variants={HomePChild} key={index}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
          <motion.span
            variants={HomeNameText}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-[45px] lg:text-[60px] xl:text-[75px] font-semibold text-gray-800 dark:text-gray-500"
          > Kristian Fulkerson
          </motion.span>
        </motion.p>
        <motion.p
          variants={HomeExtraText}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-[40px] lg:text-[55px] xl:text-[65px] font-semibold"
        >
          &amp; I&apos;m A <span className="text-blue-700">Full-Stack</span><br className="sm:hidden" /> Web Developer
        </motion.p>
        <motion.button
          variants={HomeExtraText}
          initial="hidden"
          animate="visible"
          className="text-xl fadeBtn p-3 mt-10 border hover:animate-makeItfadeIn dark:hover:animate-none dark:hover:bg-white dark:hover:text-black"
        >
          <Link to="about">Learn More</Link>
        </motion.button>
      </motion.div>
    </AnimatePage>
  );
};

export default Home;
