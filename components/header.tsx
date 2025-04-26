'use client';

import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const {user, logout} = useAuth();
  const router = useRouter();
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    document.documentElement.classList.add(saved);
    setTheme(saved);
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  const handleLogout = () => {
    logout();             
  };


  if (!user) {
    return (
      <header className="border-b px-6 py-4 flex justify-between items-center shadow-sm" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 text-sm"
          >{theme === "dark" ? "Light Mode" : "Dark Mode"}</button>
      </div>
      </header>
    );
  }

  return (
    <header className="border-b px-6 py-4 flex justify-between items-center shadow-sm" style={{ background: "var(--background)", color: "var(--foreground)" }}>
    <h1 className="text-xl font-semibold">Admin Dashboard</h1>

    <div className="flex items-center gap-4">
      <button
        onClick={toggleTheme}
        className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600 text-sm"
        >{theme === "dark" ? "Light Mode" : "Dark Mode"}</button>

      <div className="text-right">
        <p className="text-sm font-medium">{user.name}</p>
        <p className="text-xs text-gray-500">{user.email}</p>
      </div>
      <img
        src="https://i.pravatar.cc/300"
        alt="User Avatar"
        className="h-10 w-10 rounded-full object-cover"
      />
      <button
        onClick={handleLogout}
        className="text-sm text-red-600 hover:underline"
      >
        Logout
      </button>
    </div>
  </header>
  );
};

export default Header;
