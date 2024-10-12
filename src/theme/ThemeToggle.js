"use client";
import { IconButton } from "@mui/material";
import { useState, useEffect } from "react";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export default function ThemeToggle({theme,setAppTheme}) {
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setAppTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); 
  }, [theme]);


  const toggleTheme = () => {
    setAppTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (

<div style={{display:'flex',flexDirection:"row-reverse", padding: "20px",  backgroundColor: theme === "dark" ? "#333" : "#fff" }}>
<IconButton onClick={toggleTheme} aria-label="toggle theme" color="inherit">
  {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
</IconButton>

</div>
  );
}
