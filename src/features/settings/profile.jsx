import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '@context/userContext';
import useAuth from '@hooks/userHook'; 

const Profile = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const {updateUserDetails} = useAuth(); 
  // initialize state using _id, username, and email
  const [formData, setFormData] = useState({
    id: user?.id || '',
    username: user?.username || '',
    email: user?.email || '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        id: user._id,
        username: user.username,
        email: user.email,
      });
    }
  }, [user]);

  if (!user) {
    return <p>Loading user details...</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUserDetails(formData);
      alert('User details updated successfully!');
      navigate('/dashboard'); 
    } catch (error) {
      console.error('Failed to update user details:', error);
      alert('Failed to update user details.');
    }
  };

  return (
    <div className="max-w-screen min-h-screen dark:bg-neutral-900 dark:text-white flex justify-center p-4 text-lg ">
      <form
        className="bg-white dark:bg-neutral-800 shadow-2xl shadow-green-400 rounded-xl p-6 max-w-md w-full"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Edit User Details</h2>
        <div className="space-y-4">
          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
              htmlFor="username"
            >
              Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg dark:bg-neutral-700 dark:border-neutral-600 dark:text-white"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
