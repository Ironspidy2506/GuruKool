import React, { useState, useEffect, useContext } from "react";
import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom"; // To navigate on logout
import { AdminContext } from "../context/AdminContext";
import { UserContext } from "../context/UserContext";
import { ManagerContext } from "../context/ManagerContext";
import { logout } from "../utils/Logout";
import { toast } from "react-toastify";
import { FaMoon, FaSun } from "react-icons/fa"; // Icons


const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  // Access the context values
  const { atoken, setAToken } = useContext(AdminContext);
  const { mtoken, setMToken } = useContext(ManagerContext);
  const { token, setToken } = useContext(UserContext);

  // Handle Logout
  const handleLogout = () => {
    logout(navigate, atoken, setAToken, mtoken, setMToken, token, setToken); // Pass required params
  };

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (

    <nav className="z-50 shadow-md w-full fixed top-0 bg-white dark:bg-gray-900">
      <div className="w-full px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <button
            onClick={toggleSidebar}
            className="text-black dark:text-white md:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <img src={Logo} alt="Logo" className="w-12 h-12 bg-transparent dark:contrast-125 dark:brightness-200 rounded-full" />
          <div className="">
            <h1 className="text-2xl font-bold">
              <span className="text-green-700 dark:text-green-500">Guru</span>
              <span className="text-yellow-700 dark:text-yellow-500">Kool</span>
            </h1>
          </div>
        </div>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 text-gray-600 dark:text-gray-200 transition duration-300 transform hover:text-gray-700 dark:hover:text-gray-400 focus:outline-none"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <FaSun className="w-6 h-6 text-yellow-500" />
          ) : (
            <FaMoon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          )}
        </button>


        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 text-sm font-medium text-white"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
