/* eslint-disable import/no-unresolved */
import { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tilt from 'react-parallax-tilt';

import 'swiper/css';

import { urlFor } from '../../client';

const ProjectCard = ({ project }) => {
  const videoRef = useRef(null);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex mx-6">
      {/* Left Side */}
      <div className="flex flex-col pr-4 gap-4 w-full">
        <h3 className="animate-slideup text-3xl tracking-wider uppercase underline">{project.title}</h3>
        <div className="flex gap-2 my-2 font-medium">
          <button type="button" className="prjBtn dark:border-white dark:text-white">
            <a href={project?.codeLink} target="_blank" rel="noreferrer">{project.codeLink ? 'Code' : 'N/A'}</a>
          </button>
          <button type="button" className="prjBtn dark:border-white dark:text-white">
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
      {/* Right Side */}
      <div>
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
