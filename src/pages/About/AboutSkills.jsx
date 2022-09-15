/* eslint-disable react/no-unknown-property */
import { motion } from 'framer-motion';
import Socials from '../../components/Socials';
import { images } from '../../constants';

const AboutSkills = ({ skills }) => (
  <motion.div
    whileInView={{ opacity: [0, 1], x: [-100, 0] }}
    transition={{ duration: 1, staggerChildren: 0.5 }}
    className="animate-slideright flex flex-col md:flex-row mb-8 px-8 pb-10 md:pb-0"
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
      <div className="flex text-sm flex-col gap-4">
        <div className="w-full lg:hidden flex-col items-center animate-slowfade gap-4 uppercase">
          <div className="relative flex items-center justify-center">
            <h2 className="text-5xl tracking-[.5em] whitespace-nowrap text-gray-300 dark:text-gray-600 opacity-60">Works</h2>
            <h2 className="absolute text-2xl font-semibold tracking-[.4em] whitespace-nowrap text-gray-800 dark:text-gray-200">My <span className="text-blue-500">Skills</span></h2>
          </div>
        </div>
        <motion.p
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 0.6, ease: 'linear' }}
          className="w-full leading-6 animate-slideleft"
        >Being labeled a <span className="font-semibold">"Full-Stack"</span> developer is a heavy title that I take on with confidence. I enjoy the understanding and scope working with both the back and frontend offer.
          <br /><br />
          The skills needed to be a compitant full-stack developer <span className="font-semibold">Problem Solving</span>. I am currently working as a full-stack web developer and have always had a passion for problem solving. When I&apos;m not coding, building personal projects, or learning new technologies I prefer to spend most of my time with family either playing sports or relaxing.
          <br /><br />
          I pride myself in my work ethic and ability to be efficient. I have a high level of patience, a competitive mindset, and an open mind toward constructive feedback. Please feel free to reach out if you want to connect or know about any interesting hiring opporitunities.
        </motion.p>
        <motion.div
          whileInView={{ opacity: [0, 1], x: [20, 0] }}
          transition={{ duration: 0.4, ease: 'linear' }}
          className="w-full flex gap-6 text-sm sm:text-lg flex-wrap items-center justify-center"
        >
          {skills.map((skill) => (
            <div key={skill._id} className="flex flex-col gap-2 items-center justify-center">
              <img src={skill?.icon?.asset?.url} alt="" className="h-12 w-12" />
              <h3 className="tracking-[.2em] text-gray-400">{skill.name}</h3>
            </div>
          ))}
        </motion.div>
        <Socials />
      </div>
    </div>
  </motion.div>
);

export default AboutSkills;
