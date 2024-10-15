"use client";
import { IconButton } from "@mui/material";
import { useEffect } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function ThemeToggle({ theme, setTheme }) {


 

  const toggleTheme = () => {
    localStorage.setItem("theme", theme==="light" ? "dark" : "light");
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        padding: "20px",
        backgroundColor: theme === "dark" ? "#333" : "#fff",
      }}
    >
      <IconButton
        onClick={toggleTheme}
        aria-label="toggle theme"
        color="inherit"
      >
        {theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
    </div>
  );
}
