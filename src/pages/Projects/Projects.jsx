import { useState, useEffect } from 'react';

import ProjectCard from './ProjectCard';
import AnimatePage from '../../components/AnimatePage';
import { client } from '../../client';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = `*[_type == "projects"]{
      title,
      description,
      tags,
      projectLink,
      codeLink,
      "images": images[].asset->url,
      video{
        asset->{
          _id,
          url
        }
      },
    }
    `;

    client.fetch(query).then((data) => setProjects(data));
  }, []);
  return (
    <AnimatePage>
      <div className="flex flex-wrap">
        {projects?.map((project, i) => (
          <ProjectCard project={project} key={i} />
        ))}
      </div>
    </AnimatePage>
  );
};

export default Projects;
