import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks,  deleteTask, toggleTask  }) => {

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-zinc-100">Task List</h2>
      {tasks && tasks.length > 0 ? (
        <ul className="space-y-3">
          {tasks.map((task) => (
            <TaskItem
              key={task.id || task._id}
              task={task}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          ))}
        </ul>
      ) : (
        <p className="text-zinc-500 italic">No tasks available</p>
      )}
    </div>
  );
};

export default TaskList;
