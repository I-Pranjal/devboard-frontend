import ProjectItem from './projectitem'
import { Link } from 'react-router-dom'

const ProjectList = ({ projects, deleteProject }) => {
  

  const handleStatusChange = (id, newStatus) => {
    setProjects(prev =>
      prev.map(project =>
        project.id === id ? { ...project, status: newStatus } : project
      )
    )
  }

  if (projects.length === 0) {
    return <p className="text-zinc-500">No projects yet.</p>
  }

  return (
    <div className="space-y-4">
      {projects.map(project => (
        <Link to={`/projects/${project._id}`}>
        <ProjectItem
          key={project.id}
          project={project}
          onDelete={deleteProject}
          onStatusChange={handleStatusChange}
          />
          </Link>
      ))}
    </div>
  )
}

export default ProjectList
