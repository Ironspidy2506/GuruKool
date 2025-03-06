import React, { useContext, useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaMoon, FaSun } from "react-icons/fa";
import { AdminContext } from "../context/AdminContext.jsx";
import { UserContext } from "../context/UserContext.jsx";
import { ManagerContext } from "../context/ManagerContext.jsx";
import axios from "axios";
import { toast } from "react-toastify";
import Logo from "../assets/Logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const { setAToken } = useContext(AdminContext);
  const { setMToken } = useContext(ManagerContext);
  const { setToken } = useContext(UserContext);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `http://localhost:5000/api/login/admin`,
        { email, password }
      );

      if (data.success) {
        localStorage.setItem("atoken", data.atoken);
        setAToken(data.atoken);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen dark:bg-gray-900 transition-colors duration-300">
      <form
        className="relative bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 w-full max-w-md flex flex-col items-center transition-all duration-300"
        onSubmit={onSubmitHandler}
      >
        {/* Dark Mode Toggle */}
        <button
          type="button"
          className="absolute top-4 right-4 text-gray-600 dark:text-gray-200 hover:text-yellow-500"
          onClick={toggleDarkMode}
        >
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>

        {/* Logo and Company Name */}
        <img src={Logo} alt="GuruKool" className="w-16 h-16 bg-transparent dark:contrast-125 dark:brightness-200" />
        <div className="mb-5">
          <h2 className="text-3xl font-bold">
            <span className="text-green-700 dark:text-green-400">Guru</span>
            <span className="text-yellow-700 dark:text-yellow-400">Kool</span>
          </h2>
        </div>

        {/* Login Form */}
        <div className="mb-4 w-full">
          <label
            htmlFor="email"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-gray-200 transition duration-200"
          />
        </div>

        {/* Password Input with Eye Icon */}
        <div className="mb-6 w-full">
          <label
            htmlFor="password"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-1"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 dark:bg-gray-700 dark:text-gray-200 transition duration-200"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500 dark:text-gray-300 hover:text-gray-700"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash size={16} className="text-green-400" /> : <FaEye size={16} className="text-green-400" />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 dark:bg-green-600 text-white py-2 rounded-md hover:bg-green-600 dark:hover:bg-green-700 transition duration-300 focus:ring-2 focus:ring-green-400"
        >
          Login
        </button>

        {/* Forgot Password */}
        <div className="mt-6 text-center text-gray-600 dark:text-gray-300">
          <p>
            Forgot your password?{" "}
            <span className="text-green-500 cursor-pointer hover:underline">
              Click Here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
