import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ project, setActiveProject, setOpen }) => {
  console.log(project);
  const [isHovered, setIsHovered] = useState(false);

  const handleToggle = () => {
    setActiveProject(project);
    setOpen(true);
    setIsHovered(false);
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggle}
      className="flex w-[450px] h-[300px] cursor-pointer p-4 relative"
    >
      <AnimatePresence>
        {isHovered && (
          <motion.div
            whileInView={{ opacity: [0.5, 1] }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            exit={{ opacity: [1, 0] }}
            className="w-full h-full bg-black absolute inset-0 flex items-center justify-center"
          >
            <p className="animate-slidedown text-white tracking-[.4em] text-xl pl-4">{project.title}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <img src={project?.imgUrl?.asset?.url} alt="" className="h-full w-full object-cover" />
    </motion.div>
  );
};

export default ProjectCard;
