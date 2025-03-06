import React, { useEffect, useContext, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import {
  FaUsers,
  FaMoon,
  FaSun,
  FaChalkboardTeacher,
  FaChartLine,
} from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";
import { AdminContext } from "../../context/AdminContext.jsx";
import { motion } from "framer-motion"; // For smooth animations

const Dashboard = () => {
  const { atoken } = useContext(AdminContext);

  return (
    <div className="p-6 dark:bg-gray-900 min-h-screen">
      {/* Header with Dark Mode Toggle */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Dashboard
        </h1>
      </header>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Staff Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-xl shadow-lg bg-white dark:bg-opacity-10 dark:backdrop-blur-md dark:border dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <FaUsers className="text-4xl text-blue-500 dark:text-blue-400" />
            <span className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              20
            </span>
          </div>
          <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
            Staffs
          </p>
        </motion.div>

        {/* Teachers Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-xl shadow-lg bg-white dark:bg-opacity-10 dark:backdrop-blur-md dark:border dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <FaChalkboardTeacher className="text-4xl text-purple-500 dark:text-purple-400" />
            <span className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              10
            </span>
          </div>
          <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
            Teachers
          </p>
        </motion.div>

        {/* Students Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-xl shadow-lg bg-white dark:bg-opacity-10 dark:backdrop-blur-md dark:border dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <PiStudentDuotone className="text-4xl text-green-500 dark:text-green-400" />
            <span className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              100
            </span>
          </div>
          <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
            Students
          </p>
        </motion.div>

        {/* Performance Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="p-6 rounded-xl shadow-lg bg-white dark:bg-opacity-10 dark:backdrop-blur-md dark:border dark:border-gray-700"
        >
          <div className="flex items-center justify-between">
            <FaChartLine className="text-4xl text-orange-500 dark:text-orange-400" />
            <span className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              92%
            </span>
          </div>
          <p className="text-lg mt-2 text-gray-600 dark:text-gray-300">
            Performance
          </p>
        </motion.div>
      </div>

      {/* Classes Section */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
          Classes Overview
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(12)].map((_, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              key={index}
              className="p-4 rounded-lg bg-gray-200 dark:bg-gray-800 shadow-md"
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold dark:text-gray-200">
                  Class {index + 1}
                </span>
                <span className="text-xl font-bold text-gray-700 dark:text-gray-300">
                  {Math.floor(Math.random() * 50) + 10} Students
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
