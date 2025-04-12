import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.VITE_BACKEND_URL + '/api/tasks'; 

export default function  useTasks () {

    const [tasks, setTasks] = useState([]);

    // Get list of all tasks 
    const getTasks = async () => {
        try {
            const res = await axios.get(API);
            setTasks(res.data);
        } catch (err) {
            console.error('Failed to load tasks', err);
        }
    };
    
    // Load all the tasks 
      useEffect(() => {
        getTasks();
      }, []);
      
    // Delete task by id 
    const deleteTask = async (id) => {
        console.log("Deleting task with id ", id);
        try {
            await axios.delete(`${API}/${id}`);
            setTasks(tasks.filter(task => task.id !== id));
            getTasks(); 
        } catch (error) {
            console.error('Error deleting task', error);
        }
    };

    // Toggle task 
    const toggleTask = async (id) => {
        console.log("Toggling task with id ", id);
        try {
           await axios.put(`${API}/toggle/${id}`);
           await  getTasks() ;
        } catch (error) {
            console.error('Error toggling task', error);
        }
    };

    // Add task
    const createTask = async (content) => {
        try {
          await axios.post(`${API}`, { text: content });
          getTasks(); // wait for it to complete
        } catch (error) {
          console.error('Error creating new task', error);
        }
      };
      
    





    return {tasks, deleteTask, toggleTask, createTask} ; 

}