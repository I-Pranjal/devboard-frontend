import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProviderManual = ({ children }) => {
  const [dark , setDark] = useState(false);

  useEffect(() => {
    const darkState = localStorage.getItem("dark"); 
    if (darkState === "true") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDark((prev) => !prev);
    if (dark) {
      document.documentElement.classList.remove("dark");
    }
    else {
      document.documentElement.classList.add("dark");
    }
    localStorage.setItem("dark", !dark);
  }

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
