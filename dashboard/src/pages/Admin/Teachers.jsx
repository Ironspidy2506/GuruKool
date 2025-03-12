import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Teachers = () => {
  const navigate = useNavigate();
  const { atoken, teachers, setTeachers, getTeachers } =
    useContext(AdminContext);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState([]);

  useEffect(() => {
    setFilteredTeachers(
      teachers.filter((teacher) =>
        teacher.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, teachers]);

  // Apply dark mode on mount
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
    <div className="p-6 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Header with Dark Mode Toggle */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Teachers
        </h1>

        <button
          onClick={() => navigate("/teachers/add-teacher")}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
        >
          Add Teacher
        </button>
      </header>

      {/* Students Table */}
      <div className="overflow-x-auto">
        <motion.table className="min-w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="p-3 text-left text-gray-600 border border-gray-300 dark:text-gray-300">
                Name
              </th>
              <th className="p-3 text-left text-gray-600 border border-gray-300 dark:text-gray-300">
                Email
              </th>
              <th className="p-3 text-left text-gray-600 border border-gray-300 dark:text-gray-300">
                Class
              </th>
              <th className="p-3 text-left text-gray-600 border border-gray-300 dark:text-gray-300">
                Section
              </th>
              <th className="p-3 text-left text-gray-600 border border-gray-300 dark:text-gray-300">
                Roll
              </th>
              <th className="p-3 text-center text-gray-600 border border-gray-300 dark:text-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((teacher) => (
              <tr
                key={student.id}
                className="border-t dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="p-3 text-gray-700 border dark:text-gray-200">
                  {student.name}
                </td>
                <td className="p-3 text-gray-700 border dark:text-gray-200">
                  {student.email}
                </td>
                <td className="p-3 text-gray-700 border dark:text-gray-200">
                  {student.class}
                </td>
                <td className="p-3 text-gray-700 border dark:text-gray-200">
                  {student.section}
                </td>
                <td className="p-3 text-gray-700 border dark:text-gray-200">
                  {student.roll}
                </td>
                <td className="p-4 text-center border">
                  <div className="flex justify-center items-center gap-4">
                    {/* Edit Button */}
                    <button
                      className="text-yellow-500 hover:text-yellow-400 transition"
                      title="Edit"
                    >
                      <FaEdit className="text-lg" />
                    </button>
                    {/* Delete Button */}
                    <button
                      className="text-red-500 hover:text-red-400 transition"
                      title="Delete"
                    >
                      <FaTrash className="text-lg" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </motion.table>
      </div>
    </div>
  );
};

export default Teachers;
