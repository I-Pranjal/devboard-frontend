import React, { useState } from "react";
import {useUser} from "@context/userContext";
import useProjects from "@hooks/useProject"; // Assuming you have a hook to manage projects


export default function CollaboratorAccordion({projectId}) {
    const { user } = useUser();
    const { addCollaborator } = useProjects(); // Assuming you have a hook to manage projects
    const [isOpen, setIsOpen] = useState(false);
    const initialDetails = {
        user_id : user._id,
        email: "",
        role: "editor",
    };
    const [details, setDetails] = useState(initialDetails);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    }

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }; 

    const handleSubmit = () => {
        if (details.email.trim()) {
            console.log("Adding collaborator:", details );
            console.log("Project ID:", projectId);
            console.log("User ID:", user._id);
            console.log("details:", details);
            addCollaborator(projectId, details);
        }
    };

    return (
        <div className="w-full bg-zinc-900 rounded-lg shadow-md">
            <div className="border-b border-gray-600">
                <button
                    className="w-full text-left py-4 px-2 font-semibold text-white dark:text-amber-300 flex justify-between items-center"
                    onClick={handleToggle}
                >
                    Add Collaborator
                    <span>{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                    <div className="px-2 pb-4 text-gray-300">
                        <input
                            type="text"
                            value={details.email}
                            name="email"
                            onChange={(e) => handleChange(e)}
                            placeholder="Enter collaborator email address"
                            className="w-full p-2 mb-2 border border-gray-500 rounded bg-gray-800 text-white"
                        />
                        <button
                            onClick={handleSubmit}
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Add 
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
