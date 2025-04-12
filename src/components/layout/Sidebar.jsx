import { Link } from "react-router-dom";
import { Folder, LayoutDashboard, LayoutList , SquareDashedBottomCode, Brain } from "lucide-react"
import { useTheme } from '../../context/ThemeContext' ;
import { Sun , Moon, Settings} from "lucide-react";



const Sidebar = ({toggleSideBar}) => { 
  const { dark, toggleTheme } = useTheme()

  return (
    <aside className="w-screen bg-zinc-100 dark:bg-zinc-800 p-4 dark:text-white text-xl z-10 absolute rounded-b-xl sm:w-fit sm:h-full sm:pr-20">
      <nav className="flex flex-col gap-4">
        <Link to="dashboard" className="flex items-center gap-3" onClick={toggleSideBar}><LayoutDashboard /> Dashboard</Link>
        <Link to="task-tracker" className="flex items-center gap-3" onClick={toggleSideBar}><LayoutList />Tasks</Link>
        <Link to="snippet-tracker" className="flex items-center gap-3" onClick={toggleSideBar}><SquareDashedBottomCode />Snippets</Link>
        <Link to="project-tracker" className="flex items-center gap-3" onClick={toggleSideBar}><Folder /> Projects</Link>
        <Link to="inspiration" className="flex items-center gap-3" onClick={toggleSideBar}><Brain /> Brainstorm </Link>
        <Link to="settings" className="flex items-center gap-3" onClick={toggleSideBar}><Settings />Settings </Link>
        <p onClick={toggleTheme} className="flex items-center gap-3 transition cursor-pointer">
          {dark === true ? <><Sun /> <span>Light Mode</span></> : <><Moon /><span>Dark Mode</span></>}
        </p>
        <Link to="signin" className="flex items-center gap-3" onClick={toggleSideBar}>Sign In </Link>
        <Link to="signup" className="flex items-center gap-3" onClick={toggleSideBar}>Sign Up </Link>

      </nav>
    </aside>
  )
}

export default Sidebar;