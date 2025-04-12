import { useTheme } from '../../context/ThemeContext'
import {Button} from '@material-tailwind/react' 
import {Menu} from 'lucide-react'
import { Avatar } from "@material-tailwind/react";



const Header = ({toggleDrawer, toggleRightBar }) => {
  const { dark, toggleTheme } = useTheme()


  return (
    <header className="p-4 shadow flex justify-between items-center bg-white dark:bg-zinc-900 dark:text-white ">
      <Button onClick={toggleDrawer} className='text-black p-2 dark:text-white'><Menu /></Button>
      <h1 className="text-xl font-bold px-4">DevBoard</h1>
      <Avatar onClick={toggleRightBar} src="https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=000000" alt="avatar" className='w-10 rounded-full bg-white' />
    </header>
  )
}

export default Header
