// hooks/useAuth.js
import axios from "axios";
import { useUser } from "@context/userContext";

const API = process.env.VITE_BACKEND_URL + '/api/user'; 

const useAuth = () => {
  const { login, logout } = useUser(); 

  const loginUser = async (formData) => {
    try {
      console.log("This is the form data ",formData);
      const res = await axios.post(`${API}/login`, formData);
      console.log("This is the reponse data ",res.data);
      login(res.data); 
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  const registerUser = async (formData) => {
    try {
      const res = await axios.post(`${API}/register`, formData);
      console.log(res.data);
      login(res.data);
    } catch (err) {
      console.error("Registration failed", err);
    }
  };

  const updateUserDetails = async (formData) => {
    try {
      const res = await axios.post(`${API}/update`, formData);
      console.log(res.data);
      login(res.data); 
    } catch (err) {
      console.error("Update failed", err);
    }
  };

  return { loginUser, registerUser, logout, updateUserDetails };
};

export default useAuth;
