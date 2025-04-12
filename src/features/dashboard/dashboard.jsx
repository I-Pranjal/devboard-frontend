import React from "react";
import useProjects from "@hooks/useProject";
import useSnippets from "@hooks/useSnippet";
import useTasks from "@hooks/useTask";
import { Folder, ListTodo, Code } from "lucide-react";
import { Button, Progress } from "@material-tailwind/react";

const Dashboard = () => {
    const { projects } = useProjects();
    const { snippets } = useSnippets();
    const { tasks } = useTasks();
    return (
        <div className="p-4 dark:text-white bg-neutral-200 dark:bg-neutral-900 min-h-screen ">
            {/* First Row: Stats */}
            <p className="text-3xl font-bold mb-5 dark:text-white">Dashboard</p>
            <div className="md:flex justify-around mb-5 gap-5">
                <div className="border border:black dark:border-gray-300 p-5 rounded-lg text-left w-full md:w-1/3 mb-5 md:mb-0">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold">Projects</h2>
                        <Folder />
                    </div>
                    <p className="text-2xl font-light">{projects.length}</p>
                    <p className="text-sm font-mono text-gray-200">Active Projects</p>
                </div>

                <div className="border  border:black dark:border-gray-300 p-5 rounded-lg w-full md:w-1/3 mb-5 md:mb-0">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold">Tasks</h2>
                        <ListTodo />
                    </div>
                    <p className="text-lg">Total Tasks: {tasks.length}</p>
                    <Progress value={(tasks.filter(task => task.completed).length / tasks.length) * 100 || 0} className="mt-2" />
                </div>
                <div className="border  border:black dark:border-gray-300 p-5 rounded-lg w-full md:w-1/3">
                    <div className="flex justify-between">
                        <h2 className="text-xl font-bold">Snippets</h2>
                        <Code />
                    </div>
                    <p className="text-lg">Total: {snippets.length}</p>
                    <p className="text-sm font-mono text-gray-200">Saved Code Snippets</p>
                </div>
            </div>

            {/* Second Row: Recent Items */}
            <div>
                <p className="text-3xl font-bold mb-5 dark:text-white">Recent Projects, Tasks and Snippets</p>
                <div className="border  border:black dark:border-gray-300 p-5 rounded-lg w-full mb-5">
                    <h2 className="text-xl font-bold pb-2">Recent Tasks</h2>
                    <ol className="list-decimal pl-5">
                        {tasks.slice(0, 3).map((task, index) => (
                            <li key={index} className="font-light text-lg">
                                {task.text}
                            </li>
                        ))}
                    </ol>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                    <div className="border  border:black dark:border-gray-300 p-5 rounded-lg dark:bg-neutral-900">
                        <h3 className="text-xl font-semibold mb-3">Recent Projects</h3>
                        <ul className="list-none">
                            {projects.slice(0, 5).map((project, index) => (
                                <div className="flex justify-between items-center p-1" key={index}>
                                    <li className="font-light text-lg">{project.title}</li>
                                    <Button className="p-2 dark:bg-white dark:text-black text-white bg-black">
                                        {project.status.toUpperCase()}
                                    </Button>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="border  border:black dark:border-gray-300 p-5 rounded-lg dark:bg-neutral-900">
                        <h3 className="text-xl font-semibold mb-3">Recent Snippets</h3>
                        <ul className="list-disc pl-5">
                            {snippets.slice(0, 5).map((snippet, index) => (
                                <div className="flex justify-between items-center p-1" key={index}>
                                    <li className="font-light text-lg font-mono">{snippet.title}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
