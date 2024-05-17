import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleVisitSite = () => {
    if (!project.url) {
      navigate('/under-construction');  
    } else {
      window.open(project.url, "_blank"); 
    }
  };

  return (
    <div className="projectCard">
      <img src={project.imageUrl} alt={project.name} />
      <div className="cardOverlay">
        <div className="cardDetails">
          <h3>{project.name}</h3>
          <p>{project.functionality}</p>
          <a onClick={handleVisitSite} className="cardLink">Visit Site</a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="cardLink">View Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
