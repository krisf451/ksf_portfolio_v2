/* eslint-disable jsx-a11y/media-has-caption */
import { useRef } from 'react';

const ProjectCard = ({ project }) => {
  const videoRef = useRef(null);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex m-6">
      <div className="flex flex-col pr-4 gap-4 w-full p-4">
        <h3 className="animate-slideup text-3xl tracking-wider uppercase underline">{project.title}</h3>
        <div className="flex gap-2 my-2 font-medium">
          <button type="button" className="fadeBtn hover:animate-makeItfadeIn py-2 px-4 dark:border-white dark:text-white rounded-sm border border-gray-300">
            <a href={project?.codeLink} target="_blank" rel="noreferrer">{project.codeLink ? 'Code' : 'N/A'}</a>
          </button>
          <button type="button" className="fadeBtn hover:animate-makeItfadeIn py-2 px-4 dark:border-white dark:text-white rounded-sm border border-gray-300">
            <a href={project?.projectLink} target="_blank" rel="noreferrer">Live</a>
          </button>
        </div>
        <p>{project.description}</p>
        <div className="text-gray-400 dark:text-gray-600 flex flex-wrap">
          {project.tags.map((tag, i) => (
            <span key={i}>#{tag}</span>
          ))}
        </div>
      </div>
      <div className="p-4">
        <video
          ref={videoRef}
          autoPlay
          loop
          src={project.video.asset.url}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
