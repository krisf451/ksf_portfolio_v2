import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ProjectModal from './ProjectModal';

const ProjectCardTest = ({ project }) => {
  // const [toggle, setToggle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(true);
    setIsHovered(false);
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggle}
      className="w-96 h-64 md:w-64 bg-gray-100 dark:bg-gray-800 cursor-pointer p-4 relative overflow-hidden"
    >
      <ProjectModal open={open} setOpen={setOpen} project={project} />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            whileInView={{ opacity: [0.5, 1] }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            exit={{ opacity: [1, 0] }}
            className="w-96 h-64 md:w-64 bg-black absolute inset-0 flex items-center justify-center"
          >
            <p className="animate-slidedown text-white tracking-[.4em] text-xl pl-4">{project.title}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <img src={project?.imgUrl?.asset?.url} alt="" className="h-full w-full object-cover" />
    </motion.div>
  );
};

export default ProjectCardTest;
