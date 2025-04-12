import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useUser } from '../../context/userContext';
import { Button } from '@material-tailwind/react';
import {Link} from 'lucide-react'

const SharedProject = () => {
  const { shareId } = useParams();
  const [project, setProject] = useState(null);
  const [error, setError] = useState('');
  const { user } = useUser();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/projects/shared/${shareId}`)
      .then((res) => {
        setProject(res.data);
      })
      .catch((err) => {
        console.error(err);
        setError('Project not found or invalid share link.');
      });
  }, [shareId, user]);

  const isCollaborator = project?.collaborators?.some(
    (collab) => collab.user._id === user?._id
  );
  const isOwner = project?.owner?._id === user?._id;

   const [copied, setCopied] = useState(false)
  
    const handleCopy = () => {
      navigator.clipboard.writeText(`http://localhost:5173/shared/${shareId}`);
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }


  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!project) return <div className="p-6">Loading project...</div>;

  return (
    <div className="p-6 w-screen min-h-screen mx-auto bg-white shadow-md rounded-xl space-y-4">
        <Button onClick={handleCopy} size="sm" className="dark:bg-white dark:text-gray-800 bg-gray-950 text-white">
                {copied ? ' Copied!' : <Link size={15} />}
              </Button>
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-gray-700">{project.description}</p>
      <p><strong>Status:</strong> {project.status}</p>
      <p><strong>Owner ID:</strong> {project.owner?._id}</p>

      {(isOwner || isCollaborator) && (
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Edit Project
        </button>
      )}
    </div>
  );
};

export default SharedProject;
