import React, { useState } from "react";
import {
  Input,
  Textarea,
  Button,
  Dialog,
  IconButton,
  Typography,
  DialogBody,
  DialogHeader,
  DialogFooter,
} from "@material-tailwind/react";
import { Plus, X, SaveAll } from "lucide-react";

const SnippetForm = ({ addSnippet }) => {
  const initialForm = {
    title: "",
    description: "",
    language: "",
    snippet: "",
    tags: "",
  };

  const [form, setForm] = useState(initialForm);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="flex items-center gap-2 p-2 m-3 bg-amber-300 sm:text-lg text-black w-auto"
      >
        <Plus />
        <p>Add Snippet</p>
      </Button>

      <Dialog
        size="md"
        open={open}
        handler={handleClose}
        className="p-4 w-full md:w-1/2 m-auto bg-gray-300"
      >
        <DialogHeader className="relative m-0 block">
          <Typography variant="h4" color="blue-gray">
            Add Code Snippet
          </Typography>
          <Typography className="mt-1 font-normal text-gray-600">
            Store your useful code snippets with tags and language support.
          </Typography>
          <IconButton
            size="sm"
            variant="text"
            className="!absolute right-3.5 top-3.5"
            onClick={handleClose}
          >
            <X strokeWidth={3} />
          </IconButton>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <DialogBody className="space-y-2 pb-3 font-mono">
            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Title
              </label>
              <Input
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="Snippet title"
                required
                className="p-3 rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Language
              </label>
              <Input
                name="language"
                value={form.language}
                onChange={handleChange}
                placeholder="eg. JavaScript"
                className="p-3 rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Tags
              </label>
              <Input
                name="tags"
                value={form.tags}
                onChange={handleChange}
                placeholder="Comma-separated tags"
                className="p-3 rounded-lg"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Description
              </label>
              <Textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Optional description"
                className="p-3 rounded-lg"
                rows={2}
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium text-gray-700">
                Snippet
              </label>
              <Textarea
                name="snippet"
                value={form.snippet}
                onChange={handleChange}
                placeholder="Paste your code here..."
                className="p-3 rounded-lg"
                rows={6}
                required
              />
            </div>
          </DialogBody>

          <DialogFooter>
            <Button
              type="submit"
              className="mr-auto bg-green-600 text-white flex text-md gap-2 hover:bg-green-700 shadow-md shadow-black p-3"
            >
              <SaveAll strokeWidth={1.25} /> Add Snippet
            </Button>
          </DialogFooter>
        </form>
      </Dialog>
    </>
  );
};

export default SnippetForm;
