/* eslint-disable react/no-unknown-property */
import { motion } from 'framer-motion';
import Socials from '../../components/Socials';
import { images } from '../../constants';

const AboutResume = () => {
  console.log('test');
  return (
    <div className="animate-slideright flex flex-col md:flex-row mb-8 px-8 pb-10 md:pb-0" id="resume">
      <div className="hidden w-full lg:flex flex-col items-center animate-slowfade gap-4 uppercase">
        <div className="relative flex items-center justify-center">
          <h2 className="text-5xl tracking-[.1em] whitespace-nowrap text-gray-300 dark:text-gray-600 opacity-60">Technologies</h2>
          <h2 className="absolute text-2xl font-semibold tracking-[.4em] whitespace-nowrap text-gray-800 dark:text-gray-200">My <span className="text-blue-500">Skills</span></h2>
        </div>
      </div>
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
              <h2 className="text-5xl tracking-[.5em] whitespace-nowrap text-gray-300 dark:text-gray-600 opacity-60">Resume</h2>
              <h2 className="absolute text-2xl font-semibold tracking-[.4em] whitespace-nowrap text-gray-800 dark:text-gray-200">About <span className="text-blue-500">Me</span></h2>
            </div>
          </div>
          <p className="w-full leading-6 animate-slideleft">Hello there! My name is <span className="font-semibold">Kristian Fulkerson</span>. I am currently working as a full-stack web developer and have always had a passion for problem solving. When I&apos;m not coding, building personal projects, or learning new technologies I prefer to spend most of my time with family either playing sports or relaxing.
            <br /><br />
            I pride myself in my work ethic and ability to be efficient. I have a high level of patience, a competitive mindset, and an open mind toward constructive feedback. Please feel free to reach out if you want to connect or know about any interesting hiring opporitunities.
          </p>
          <div className="w-full flex gap-6 text-lg">
            <div>
              <p className="font-medium">Name:</p>
              <p className="font-medium">Address:</p>
              <p className="font-medium">Study:</p>
              <p className="font-medium">Email:</p>
              <p className="font-medium">Phone:</p>
            </div>
            <div>
              <p>Kristian Fulkerson</p>
              <p>6140 Correll St Riverside, CA</p>
              <p>University Of California Riverside</p>
              <p>kristianf451@gmail.com</p>
              <p>+951 227 3742</p>
            </div>
          </div>
          <Socials />
          <button type="button" className="fadeBtn hover:animate-makeItfadeIn font-medium uppercase border w-64 border-gray-800 p-3 dark:animate-none dark:hover:bg-white dark:hover:text-black">
            <a href="ksf_resume_new.pdf" download="ksf-resume">
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutResume;
