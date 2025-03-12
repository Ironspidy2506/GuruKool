import React, { useState, useEffect, useContext } from "react";
import { FaPlus, FaEdit, FaTrash, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext.jsx";

const Students = () => {
  const navigate = useNavigate();
  const { atoken, students, setStudents, getStudents } =
    useContext(AdminContext);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    if (atoken) {
      getStudents();
    }
  }, [atoken]);

  useEffect(() => {
    setFilteredStudents(
      students.filter((student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, students]);

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

  const handleEdit = (id) => {
    navigate(`/students/edit-student/${id}`);
  };

  const handleDelete = (id) => {};

  return (
    <div className="p-6 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Header with Dark Mode Toggle */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Students
        </h1>

        <button
          onClick={() => navigate("/students/add-student")}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
        >
          Add Student
        </button>
      </header>

      {/* Search Bar */}
      <div className="flex items-center mb-4 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow-md">
        <FaSearch className="text-gray-500 dark:text-gray-300 mr-3" />
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-200"
        />
      </div>

      {/* Students Table */}
      <div className="overflow-x-auto">
        <motion.table className="min-w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <thead className="bg-gray-100 dark:bg-gray-700">
            <tr>
              <th className="p-3 text-center text-gray-600 border border-gray-300 dark:text-gray-300">
                Name
              </th>
              <th className="p-3 text-center text-gray-600 border border-gray-300 dark:text-gray-300">
                Email
              </th>
              <th className="p-3 text-center text-gray-600 border border-gray-300 dark:text-gray-300">
                Class
              </th>
              <th className="p-3 text-center text-gray-600 border border-gray-300 dark:text-gray-300">
                Section
              </th>
              <th className="p-3 text-center text-gray-600 border border-gray-300 dark:text-gray-300">
                Roll
              </th>
              <th className="p-3 text-center text-gray-600 border border-gray-300 dark:text-gray-300">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr
                key={student._id}
                className="border-t dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <td className="p-3 text-gray-700 border text-center dark:text-gray-200">
                  {student.name}
                </td>
                <td className="p-3 text-gray-700 border text-center dark:text-gray-200">
                  {student.email}
                </td>
                <td className="p-3 text-gray-700 border text-center dark:text-gray-200">
                  {student.class}
                </td>
                <td className="p-3 text-gray-700 border text-center dark:text-gray-200">
                  {student.section}
                </td>
                <td className="p-3 text-gray-700 border text-center dark:text-gray-200">
                  {student.roll}
                </td>
                <td className="p-4 text-center border">
                  <div className="flex justify-center items-center gap-4">
                    {/* Edit Button */}
                    <button
                      onClick={() => handleEdit(student._id)}
                      className="text-yellow-500 hover:text-yellow-400 transition"
                      title="Edit"
                    >
                      <FaEdit className="text-lg" />
                    </button>
                    {/* Delete Button */}
                    <button
                      onClick={() => handleDelete(student._id)}
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

export default Students;
