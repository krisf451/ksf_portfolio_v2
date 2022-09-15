import { useState } from 'react';
import { motion } from 'framer-motion';

import Socials from '../../components/Socials';
import ProjectCard from './ProjectCard';
import AnimatePage from '../../components/AnimatePage';
import ProjectModal from './ProjectModal';

const Projects = ({ projects }) => {
  const [activeProject, setActiveProject] = useState(null);
  const [open, setOpen] = useState(false);
  return (
    <AnimatePage>
      <div className="flex flex-col md:flex-row px-8 pb-10 lg:pb-0 justify-center">
        <ProjectModal project={activeProject} open={open} setOpen={setOpen} />
        <div className="hidden lg:flex flex-col items-center animate-slowfade gap-4 mr-16">
          <div className="relative flex items-center justify-center uppercase">
            <h2 className="text-6xl tracking-[.4em] whitespace-nowrap text-gray-300 dark:text-gray-600 opacity-60">Works</h2>
            <h2 className="absolute text-2xl font-semibold tracking-[.4em] whitespace-nowrap text-gray-800 dark:text-gray-200">My <span className="text-blue-500">Projects</span></h2>
          </div>
          <div className="flex">
            <h3 className="text-xl text-gray-600 text-center">“The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense.”</h3>
          </div>
          <img src="projects_hero.jpg" alt="" className="h-96 ml-10 rounded-lg opacity-90 my-10" />
          <Socials />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="whitespace-nowrap uppercase tracking-[.4em] font-semibold">My Projects</h2>
            <motion.hr
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, ease: 'linear' }}
              className="border border-gray-200"
            />
          </div>
          <div className="flex lg:hidden flex-col items-center animate-slowfade gap-4 mb-8">
            <div className="relative flex items-center justify-center uppercase">
              <h2 className="text-5xl tracking-[.4em] whitespace-nowrap text-gray-300 dark:text-gray-600 opacity-60">Works</h2>
              <h2 className="absolute text-xl font-semibold tracking-[.4em] whitespace-nowrap text-gray-800 dark:text-gray-200">My <span className="text-blue-500">Projects</span></h2>
            </div>
            <h3 className="text-lg text-gray-600 text-center">“The three great essentials to achieve anything worthwhile are, first, hard work; second, stick-to-itiveness; third, common sense.”</h3>
          </div>
          <div className="flex flex-col gap-4 justify-start items-center">
            {projects.map((project, i) => (
              <ProjectCard key={i} project={project} setActiveProject={setActiveProject} setOpen={setOpen} />
            ))}
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default Projects;
