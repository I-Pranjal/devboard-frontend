import React from 'react';

const TaskItem = ({ task, deleteTask, toggleTask }) => {
  return (
    <li className="flex items-center justify-between p-3 bg-white dark:bg-transparent dark:border-white  rounded-xl shadow-sm border border-zinc-200">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task._id)}
          className="form-checkbox h-5 w-5 text-blue-600 cursor-pointer"
        />
        <span className={`text-base font-medium ${task.done ? 'line-through text-zinc-400' : 'text-zinc-800 dark:text-zinc-100'}`}>
          {task.text}
        </span>
      </div>
      <button
        onClick={() => deleteTask(task._id)}
        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm transition-colors"
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
