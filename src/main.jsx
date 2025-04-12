import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { ThemeProviderManual } from './context/ThemeContext'
import { UserProvider } from "./context/userContext";
import { ThemeProvider as MTThemeProvider } from "@material-tailwind/react"; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ThemeProviderManual>
        <MTThemeProvider>
          <App />
        </MTThemeProvider>
      </ThemeProviderManual>
    </UserProvider>
  </React.StrictMode>,
)
