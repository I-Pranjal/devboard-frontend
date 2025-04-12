import { useState } from "react";
import TaskList from "./Tasklist";
import TaskForm from "./Taskform";
import useTasks from "@hooks/useTask";

const TaskManager = () => {
  const { tasks, createTask, deleteTask, toggleTask } = useTasks();
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter(task => {
    if (filter === "completed") return task.done;
    if (filter === "pending") return !task.done;
    return true;
  });

  return (
    <div className="max-w-2xl mx-auto p-6 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center dark:text-amber-300">
        📝 Task Manager
      </h1>


      {/* Form + Filter Button Group in a row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <TaskForm createTask={createTask} />
  
        <div className="flex gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition-colors duration-300 ${
              filter === "all"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-zinc-200 dark:bg-zinc-700 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-600"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("pending")}
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition-colors duration-300 ${
              filter === "pending"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-zinc-200 dark:bg-zinc-700 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-600"
            }`}
          >
            Pending
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition-colors duration-300 ${
              filter === "completed"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-zinc-200 dark:bg-zinc-700 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-600"
            }`}
          >
            Completed
          </button>
        </div>
      </div>
      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />
    </div>
  );
};

export default TaskManager;
