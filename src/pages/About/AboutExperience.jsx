/* eslint-disable react/no-unknown-property */
import { motion } from 'framer-motion';

const AboutExperience = ({ experiences }) => (
  <motion.div
    whileInView={{ opacity: [0, 1], x: [-100, 0] }}
    transition={{ duration: 1, staggerChildren: 0.5 }}
    className="animate-slideright flex flex-col md:flex-row mb-8 px-8 pb-10 md:pb-0"
    id="experience"
  >
    <div className="w-full">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="whitespace-nowrap uppercase tracking-[.4em] font-semibold">Experience</h2>
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
            <h2 className="text-4xl sm:text-5xl tracking-[.1em] sm:tracking-[.2em] text-gray-300 dark:text-gray-600 opacity-60">
              Professional
            </h2>
            <h2 className="absolute text-xl sm:text-2xl font-semibold tracking-[.4em] whitespace-nowrap text-gray-800 dark:text-gray-200">
              My <span className="text-blue-500">Jobs</span>
            </h2>
          </div>
        </div>
        {
          experiences.map((experience) => (
            <div key={experience._id} className="flex flex-col gap-4">
              <h3 className="text-center sm:left-left font-semibold">{experience.company} - ({experience.title})</h3>
              <motion.p
                whileInView={{ opacity: [0, 1], y: [-20, 0] }}
                transition={{ duration: 0.7, ease: 'linear' }}
                className="w-full leading-6 animate-slideleft text-center sm:text-left"
              >After graduating from Bloomtech&apos;s Full-stack web developer bootcamp I soon landed my first job at
                <span className="font-semibold">Phoenix Capital Group</span> where I still work today.
                <br /><br />
                {experience.desc}
              </motion.p>
              <motion.div
                whileInView={{ opacity: [0, 1], x: [-20, 0] }}
                transition={{ duration: 0.5, ease: 'linear' }}
                className="w-full flex gap-6 text-sm sm:text-lg items-center justify-center"
              >
                <img src={experience?.logo?.asset?.url} alt="" className="h-16 w-16 transition-transform duration-500 ease-in-out hover:scale-125" />
              </motion.div>
            </div>
          ))
        }
      </div>
    </div>
  </motion.div>
);

export default AboutExperience;
