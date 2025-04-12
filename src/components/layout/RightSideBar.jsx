import { Button } from "@material-tailwind/react";
import { useState } from "react"
import { Link } from "react-router";
import { Settings, X} from "lucide-react"


const RightSideBar = ({rightbar, toggleRightBar }) => {
    return (
        <>
            {rightbar && (
        <div className="fixed right-0 top-0 dark:bg-neutral-600 bg-neutral-200 w-screen sm:w-64 sm:h-fit p-6 sm:rounded-xl z-20">
        <p className="flex justify-end text-white"><X onClick={toggleRightBar}/></p>
        <nav className="flex flex-col gap-4 items-center">
        <Link to="../settings" className="flex items-center gap-3 dark:text-white" onClick={toggleRightBar}><Settings />Settings </Link>
        <Link to="../signin" className="flex items-center gap-3 dark:text-white" onClick={toggleRightBar}>Sign In </Link>
        <Link to="../signup" className="flex items-center gap-3 dark:text-white" onClick={toggleRightBar}>Sign Up </Link>

        </nav></div>
            )}
        </>
    );
}

export default RightSideBar; 