const ProjectItem = ({ project, onDelete, onStatusChange }) => {
    return (
        <div className="border border-gray-700 p-4 rounded-lg shadow-sm dark:bg-gray-600 dark:text-white bg-gray-200 text-black">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <button
                    onClick={() => onDelete(project._id)}
                    className="bg-red-500 hover:bg-red-600 text-white rounded-md py-1 px-2 text-sm"
                >
                    Delete
                </button>
            </div>

            <p className="text-sm">{project.description}</p>

            {project.repoLink && (
                <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-500 hover:underline text-sm block mt-2"
                >
                    🔗 View Repo
                </a>
            )}

            <div className="mt-3">
                <label className="text-sm text-gray-500 dark:text-white mr-2">Status:</label>
                <select
                    value={project.status}
                    onChange={(e) => onStatusChange(project.id, e.target.value)}
                    className="p-1 rounded bg-gray-800 border border-gray-700 text-sm text-gray-100"
                >
                    <option value="planned">Planned</option>
                    <option value="in progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
        </div>
    );
};

export default ProjectItem;
