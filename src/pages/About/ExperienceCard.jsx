/* eslint-disable react/no-unknown-property */
import { motion } from 'framer-motion';

const ExperienceCard = ({ experience }) => (
  <>
    <h3 className="text-center font-semibold">{experience.company} - ({experience.title})</h3>
    <motion.p
      whileInView={{ opacity: [0, 1], y: [-20, 0] }}
      transition={{ duration: 0.7, ease: 'linear' }}
      className="w-full leading-6 animate-slideleft text-center tracking-widest"
    >
      {experience.desc}
    </motion.p>
    <motion.div
      whileInView={{ opacity: [0, 1], x: [-20, 0] }}
      transition={{ duration: 0.5, ease: 'linear' }}
      className="w-full flex gap-6 text-sm sm:text-lg items-center justify-center"
    >
      <img src={experience?.logo?.asset?.url} alt="" className="h-16 w-16 transition-transform duration-500 ease-in-out hover:scale-125 object-contain" />
    </motion.div>
  </>
);

export default ExperienceCard;
