import { useEffect, useState } from "react";
import axios from "axios";

const API = `${import.meta.env.VITE_BACKEND_URL}/api/snippets`; 


export default function useSnippets() {

const [snippets, setSnippets] = useState([]);

// Get list of all snippets
const getSnippets = async () => {
    try {
        const res = await axios.get(API);
        setSnippets(res.data);
    } catch (err) {
        console.error('Failed to load snippets', err);
    }
};

useEffect(() => {
    getSnippets();
}, []);


// Add a snippet
const addSnippet = async (snippet) => {
    try {
        const res = await axios.post(API, snippet);
        setSnippets([...snippets, res.data]);
        getSnippets(); // wait for it to complete
    } catch (err) {
        console.error('Failed to add snippet', err);
    }
};

// Delete a snippet
const deleteSnippet = async (id) => {
    console.log('Deleting snippet with id:', id);
    try {
        await axios.delete(`${API}/${id}`);
        setSnippets(snippets.filter((snippet) => snippet.id !== id));
        getSnippets(); // wait for it to complete
    } catch (err) {
        console.error('Failed to delete snippet', err);
    }
};









return {
        snippets,
        addSnippet,
        getSnippets,
        deleteSnippet,
    };
}