import React from 'react';
import { motion } from 'framer-motion';
import AnimatePage from '../components/AnimatePage';

const Home = () => {
  const text1 = 'Hey there,';
  const text2 = "I'm Kristian Fulkerson";
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

  return (
    <AnimatePage>
      <div className="relative">
        <motion.div className="flex flex-col justify-center items-start pl-4 pt-56 w-full overflow-hidden">
          <motion.p
            variants={pContainer}
            initial="hidden"
            animate="visible"
            className="text-3xl sm:text-5xl lg:text-[65px]"
          >
            {letters1.map((letter, index) => (
              <motion.span variants={pChild} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.p>
          <motion.p
            variants={pContainer}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl lg:text-[80px] font-semibold"
          >
            {letters2.map((letter, index) => (
              <motion.span variants={pChild} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </AnimatePage>
  );
};

export default Home;
