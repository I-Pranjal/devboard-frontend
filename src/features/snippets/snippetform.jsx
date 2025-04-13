import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { CirclePlus, SquarePlus, X } from "lucide-react";

export default function SnippetForm({ addSnippet }) {
  // Default variables -----------------------------
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  // --------------------------------------------------
  // Custom variables -----------------------------
  const initialForm = {
    title: "",
    description: "",
    language: "",
    snippet: "",
    tags: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Add snippet button was clicked!");
    addSnippet({
      ...form,
      id: Math.random().toString(36).substring(2, 15),
    });
    setForm(initialForm);
    handleOpen();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="filled"
        className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-3 px-4 rounded"
      >
        <span className="flex gap-2 items-center">
        <CirclePlus />
        Add Snippet
        </span>
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        className="w-screen p-0 h-screen m-0 rounded-none bg-neutral-300 dark:bg-gray-800"
      >
        <DialogHeader className="flex justify-between items-center dark:bg-gray-700">
          <h2 className="text-lg font-bold text-gray-800 dark:text-gray-200">
            Add New Snippet
          </h2>
          <Button
            variant="text"
            color="black"
            onClick={handleOpen}
            className="mr-1 dark:text-white"
          >
            <span><X /></span>
          </Button>
        </DialogHeader>
        <DialogBody className="p-4 space-y-4">
          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Title
            </label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Snippet title"
              required
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Language
            </label>
            <input
              name="language"
              value={form.language}
              onChange={handleChange}
              placeholder="eg. JavaScript"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Tags
            </label>
            <input
              name="tags"
              value={form.tags}
              onChange={handleChange}
              placeholder="Comma-separated tags"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
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
              placeholder="Optional description"
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
              rows={2}
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">
              Snippet
            </label>
            <textarea
              name="snippet"
              value={form.snippet}
              onChange={handleChange}
              placeholder="Paste your code here..."
              className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-200"
              rows={6}
              required
            />
          </div>
        </DialogBody>
        <DialogFooter className="flex justify-end">
          <Button
            variant="gradient"
            color="green"
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            <span className="flex gap-2 items-center">
            <SquarePlus />
            Add snippet</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}