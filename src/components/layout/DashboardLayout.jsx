import Sidebar from './Sidebar';
import Header from './Header';
import { useState } from 'react';
import RightSideBar from './RightSideBar';


const DashboardLayout = ({ children }) => {
  const [sidebaropen, setSidebarOpen] = useState(false); 
  const [rightbar, setRightBar] = useState(false); 
  const toggleRightBar = () => setRightBar(!rightbar) ;

  return (
    <div>
      <Header toggleDrawer={() => setSidebarOpen(!sidebaropen)} toggleRightBar={toggleRightBar} />
        <RightSideBar toggleRightBar={toggleRightBar} rightbar={rightbar}/>
      <div className="flex flex-1">
        {sidebaropen && <Sidebar toggleSideBar = {() => setSidebarOpen(!sidebaropen)} />}
        <main className="flex-1 bg-gray-100">{children}</main>
      </div>
    </div>
  );
}

export default DashboardLayout;