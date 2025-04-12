import { useTheme } from './context/ThemeContext';
import React from 'react';
import DashboardLayout from './components/layout/DashboardLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectTracker from './features/project/projectmanager';
import TaskManager from './features/tasks/Taskmanager';
import SnippetManager from './features/snippets/snippetmanager';
import BrainstormChat from './features/brainstorm/chat';
import Dashboard from './features/dashboard/dashboard';
import Signin from './features/users/signin'; 
import Signup  from './features/users/signup';
import SettingManager from './features/settings/settingmanager';
import ProjectDetails from './features/project/projectDetails';
import SharedProject from './features/shared/sharedProject';


function App() {
  const { dark, toggleTheme } = useTheme();

  return (
           <Router> <DashboardLayout>
      <div className='dark:bg-neutral-800 bg-gray-100 h-full'>
          <Routes>
            <Route path="/" element={<ProjectTracker />} />
            <Route path="/project-tracker" element={<ProjectTracker />} />
            <Route path="/task-tracker" element={<TaskManager />} />
            <Route path="/snippet-tracker" element={<SnippetManager />} />
            <Route path="/inspiration" element={<BrainstormChat />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/settings" element={<SettingManager />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/shared/:shareId" element={<SharedProject />} />

          </Routes>
      </div>
    </DashboardLayout>
        </Router>
  );
}

export default App;
