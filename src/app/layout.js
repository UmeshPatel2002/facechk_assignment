"use client"; 

import React, { useState, useEffect } from "react";
import "./globals.css";
import { metadata } from "@/utils/metadata";
import localFont from 'next/font/local';
import ThemeToggle from "@/theme/ThemeToggle";
import TableComponent from "@/component/tablecomponent";



const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("light"); 
  const tableStyles = {
    backgroundColor: theme === "dark" ? "#333" : "#fff",
    color: theme === "dark" ? "#fff" : "#000",
  };
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`} style={{...tableStyles}}>
        <ThemeToggle theme={theme} setAppTheme={setTheme} /> 
        <TableComponent theme={theme}/>
        {children}
      </body>
    </html>
  );
}
