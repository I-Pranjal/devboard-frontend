import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { CirclePlus, SquarePlus, X } from "lucide-react";
import { useUser } from "@context/userContext";

export default function ProjectForm({ addProject }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const [form, setForm] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    const creator = user || JSON.parse(localStorage.getItem("devboardUser"));

    if (creator && creator._id) {
      setForm({
        title: "",
        description: "",
        repoLink: "",
        deadline: "",
        status: "planned",
        owner: creator._id,
        collaborators: [],
      });
    } else {
      alert("Please login to add a project.");
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (e) => {
    setForm({ ...form, status: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.description.trim()) {
      alert("Please fill all required fields.");
      return;
    }

    addProject(form);

    setForm({
      ...form,
      title: "",
      description: "",
      repoLink: "",
      deadline: "",
      status: "planned",
    });

    setOpen(false);
  };

  if (!form) return null;

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="filled"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded shadow-md"
      >
        <span className="flex gap-2 items-center">
          <CirclePlus />
          Add Project
        </span>
      </Button>
      <Dialog
        open={open}
        className="w-screen p-0 h-screen m-0 rounded-none bg-neutral-300 dark:bg-gray-800"
        handler={handleOpen}
      >
        <DialogHeader className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            Add New Project
          </h2>
          <Button
            variant="text"
            color="black"
            onClick={handleOpen}
            className="mr-1 dark:text-white"
          >
            <span>
              <X />
            </span>
          </Button>
        </DialogHeader>
        <DialogBody className="px-6 py-4 space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Project Title
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter project title"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Brief project description"
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              rows={3}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Repository Link
            </label>
            <input
              name="repoLink"
              value={form.repoLink}
              onChange={handleChange}
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              placeholder="e.g. https://github.com/username/project"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Deadline
            </label>
            <input
              type="date"
              name="deadline"
              value={form.deadline}
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Status
            </label>
            <select
              value={form.status}
              onChange={handleSelectChange}
              className="p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              <option value="planned">Planned</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-end px-6 py-4">
          <Button
            variant="gradient"
            color="green"
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow-md"
          >
            <span className="flex gap-2 items-center">
              <SquarePlus />
              Confirm
            </span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}