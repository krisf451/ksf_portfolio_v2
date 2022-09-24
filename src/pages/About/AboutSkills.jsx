/* eslint-disable react/no-unknown-property */
import { motion } from 'framer-motion';
import { AiOutlineArrowDown } from 'react-icons/ai';

const AboutSkills = ({ skills }) => (
  <motion.div
    whileInView={{ opacity: [0, 1], x: [-100, 0] }}
    transition={{ duration: 1, staggerChildren: 0.5 }}
    className="animate-slideright flex flex-col md:flex-row px-8 sm:h-screen lg:h-[calc(100vh-120px)] sm:overflow-y-scroll mb-10"
    id="skills"
  >
    <div className="w-full">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="whitespace-nowrap uppercase tracking-[.4em] font-semibold">Skills</h2>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, ease: 'linear' }}
          className="border border-gray-200"
        />
      </div>
      <div className="flex text-sm md:text-[16px] flex-col gap-4">
        <div className="w-full lg:hidden flex-col items-center animate-slowfade gap-4 uppercase">
          <div className="relative flex items-center justify-center">
            <h2 className="text-4xl sm:text-5xl tracking-[.2em] whitespace-nowrap text-gray-300 dark:text-gray-600 opacity-60">Technology</h2>
            <h2 className="absolute text-xl sm:text-2xl font-semibold tracking-[.4em] whitespace-nowrap text-gray-800 dark:text-gray-200">My <span className="text-blue-500">Skills</span></h2>
          </div>
        </div>
        <motion.p
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-full leading-6 md:tracking-widest text-lg animate-slideleft text-center sm:text-left"
        >Being labeled a <span className="font-semibold">&quot;Full-Stack&quot;</span>developer is a heavy title that I have learned to wear with confidence.
          I enjoy the larger scope and extra understanding that come from working with both the front and back-end of a project.
          <br /><br />
          <span className="text-lg block py-4">
            Check out some of the skills I have learned in the journey to <span className="font-semibold">&quot;Full-Stack&quot;</span>
          </span>
        </motion.p>
        <motion.div
          whileInView={{ opacity: [0, 1], x: [20, 0] }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full flex gap-6 text-sm sm:text-lg flex-wrap items-center justify-center"
        >
          {skills.map((skill) => (
            <a key={skill._id} href={skill.link} className="flex flex-col gap-2 items-center justify-center transition-all duration-300 hover:scale-125 cursor-pointer" target="_blank" rel="noreferrer">
              <img src={skill?.icon?.asset?.url} alt="" className="h-12 w-12 lg:w-8 lg:h-8" />
              <h3 className="tracking-[.2em] text-gray-400">{skill.name}</h3>
            </a>
          ))}
        </motion.div>
        <a href="#experience" className="text-3xl mt-10">
          <AiOutlineArrowDown className="mx-auto mt-6 animate-bounce" />
        </a>
      </div>
    </div>
  </motion.div>
);

export default AboutSkills;
