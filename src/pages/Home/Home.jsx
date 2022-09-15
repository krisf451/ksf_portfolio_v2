import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatePage from '../../components/AnimatePage';

const Home = () => {
  const text1 = 'Hi there,';
  const text2 = 'My name is';
  const letters1 = Array.from(text1);
  const letters2 = Array.from(text2);

  const pContainer = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: i * 0.3 },
    }),
  };

  const pChild = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
  };

  const extraText = {
    hidden: {
      opacity: 0,
      x: '-100px',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 2, duration: 0.5 },
    },
  };
  const nameText = {
    hidden: {
      opacity: 0,
      x: '-100px',
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 1.5, duration: 0.5 },
    },
  };

  return (
    <AnimatePage>
      <motion.div className="flex flex-col justify-center items-start ml-2 md:mx-0 md:pl-16 lg:pl-24 xl:pl-36 pt-32 sm:pt-56 overflow-hidden">
        <motion.p
          variants={pContainer}
          initial="hidden"
          animate="visible"
          className="text-3xl lg:text-[45px] xl:text-[50px]"
        >
          {letters1.map((letter, index) => (
            <motion.span variants={pChild} key={index} className="text-gray-600 dark:text-gray-300">
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          variants={pContainer}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-[50px] lg:text-[60px] xl:text-[75px] font-semibold py-4 lg:py-8 xl:py-12"
        >
          {letters2.map((letter, index) => (
            <motion.span variants={pChild} key={index}>
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
          <motion.span
            variants={nameText}
            initial="hidden"
            animate="visible"
            className="text-3xl md:text-[50px] lg:text-[60px] xl:text-[75px] font-semibold text-gray-800 dark:text-gray-500"
          > Kristian Fulkerson
          </motion.span>
        </motion.p>
        <motion.p
          variants={extraText}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-[40px] lg:text-[55px] xl:text-[65px] font-semibold"
        >
          &amp; I&apos;m A <span className="text-blue-700">Full-Stack</span><br className="sm:hidden" /> Web Developer
        </motion.p>
        <motion.button
          variants={extraText}
          initial="hidden"
          animate="visible"
          className="text-xl fadeBtn p-3 mt-10 border hover:animate-makeItfadeIn dark:hover:animate-none dark:hover:bg-white dark:hover:text-black"
        >
          <Link to="about">
            Learn More
          </Link>
        </motion.button>
      </motion.div>
    </AnimatePage>
  );
};

export default Home;
