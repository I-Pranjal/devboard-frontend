import { useState } from "react";

const TaskForm = ({ createTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    createTask(task.trim());
    setTask('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 bg-white dark:bg-zinc-800 shadow-md rounded-xl px-4 py-3"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="What needs to be done?"
        className="flex-1 border border-gray-300 dark:border-zinc-600 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-zinc-700 dark:text-white"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
