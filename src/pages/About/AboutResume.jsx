/* eslint-disable react/no-unknown-property */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import Socials from '../../components/Socials';

const AboutResume = () => (
  <motion.div
    whileInView={{ opacity: [0, 1], x: [-50, 0] }}
    transition={{ duration: 1, staggerChildren: 0.5 }}
    className="animate-slideright flex flex-col md:flex-row mb-8 px-8 pb-8 md:pb-0"
    id="about"
  >
    <div className="w-full">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="whitespace-nowrap uppercase tracking-[.4em] font-semibold">About Me</h2>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, ease: 'linear' }}
          className="border border-gray-200"
        />
      </div>
      <div className="flex text-sm flex-col gap-4">
        <div className="w-full lg:hidden flex-col items-center animate-slowfade gap-4 uppercase">
          <div className="relative flex items-center justify-center">
            <h2 className="text-4xl sm:text-5xl tracking-[.5em] whitespace-nowrap text-gray-300 dark:text-gray-600 opacity-60">Resume</h2>
            <h2 className="absolute text-xl sm:text-2xl font-semibold tracking-[.4em] whitespace-nowrap text-gray-800 dark:text-gray-200">About <span className="text-blue-500">Me</span></h2>
          </div>
        </div>
        <motion.p
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="w-full leading-6 animate-slideleft text-center sm:text-left"
        >Hello there! My name is<span className="font-semibold"> Kristian Fulkerson</span>.
          I am currently working as a full-stack web developer and have always had a passion for problem solving and development.
          When I&apos;m not coding personal projects, building new features at work, or learning new technologies
          I prefer to spend most of my time with family either playing sports or just relaxing together.
          <br /><br />
          I pride myself in my work ethic and ability to be efficient. I have a high level of patience, a competitive mindset, and an open mind toward constructive feedback.
          Please feel free to reach out if you want to connect or know about any interesting hiring opporitunities.
          <Link to="/contact" className="group">
            <BsFillArrowRightCircleFill className="inline-flex mb-1 ml-2 transition-transform duration-300 hover:translate-x-2 ease-in-out" />
          </Link>
        </motion.p>
        <motion.div
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full flex gap-6 text-sm sm:text-lg"
        >
          <div>
            <p className="font-medium">Name:</p>
            <p className="font-medium">Address:</p>
            <p className="font-medium">Study:</p>
            <p className="font-medium">Email:</p>
            <p className="font-medium">Phone:</p>
          </div>
          <div className="w-full overflow-hidden">
            <p className="">Kristian Fulkerson</p>
            <p className="whitespace-nowrap">6140 Correll St Riverside, CA</p>
            <p className="whitespace-nowrap">University Of California Riverside</p>
            <p className="">kristianf451@gmail.com</p>
            <p className="">+951 227 3742</p>
          </div>
        </motion.div>
        <Socials />
        <button type="button" className="fadeBtn hover:animate-makeItfadeIn font-medium uppercase border w-64 border-gray-800 p-3 dark:animate-none dark:hover:bg-white dark:hover:text-black">
          <a href="ksf_resume_new.pdf" download="ksf-resume">
            Download Resume
          </a>
        </button>
      </div>
    </div>
  </motion.div>
);

export default AboutResume;
