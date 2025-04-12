import { useParams } from 'react-router-dom';
import { useUser } from '@context/userContext';
import { useState, useEffect } from 'react';
import useProjects from '../../hooks/useProject';
import React from 'react';
import CollaboratorAccordion from '../../components/elements/accordion';
 


const ProjectDetails = () => {
  const { id } = useParams();
  const { user } = useUser();
  const { projects } = useProjects();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const foundProject = projects.find(project => project._id === id);
    setProject(foundProject);
  }, [projects, id]);

  if (!project) return <div className="p-6">Loading project...</div>;

  
  return (
    <>
      {project.owner === user._id ? (
        <div className="p-6 w-screen min-h-screen mx-auto bg-white dark:bg-neutral-900 shadow-md space-y-4 text-gray-900 dark:text-white">
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
          <p><strong>Status:</strong> {project.status}</p>
          <p><strong>Repo:</strong> <a href={project.repoLink} className="text-blue-600 underline">{project.repoLink || "Not provided"}</a></p>
          <p><strong>Owner ID:</strong> {project.owner}</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Edit</button>


          <CollaboratorAccordion projectId = {project._id} />


        </div>
      ) 
      
      
      
      
      
      
      
      
      
      :
 
      (
        <div className="p-6 min-h-screen text-red-500">
          <p>You cannot access this project.</p>
        </div>
      )}
    </>
  );
};

export default ProjectDetails;
