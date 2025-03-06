import React, { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash, FaMoon, FaSun } from "react-icons/fa";
import { motion } from "framer-motion";

// Sample student data (Replace with API fetch)
const sampleStudents = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    class: "10",
    section: "A",
    roll: 101,
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    class: "12",
    section: "B",
    roll: 202,
  },
];

const Students = () => {
  const [students, setStudents] = useState(sampleStudents);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    class: "",
    section: "",
    roll: "",
  });
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

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

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle Input Change
  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  // Add Student
  const handleAddStudent = (e) => {
    e.preventDefault();
    if (
      !newStudent.name ||
      !newStudent.email ||
      !newStudent.class ||
      !newStudent.roll
    )
      return alert("Fill all fields!");

    setStudents([...students, { id: students.length + 1, ...newStudent }]);
    setNewStudent({ name: "", email: "", class: "", section: "", roll: "" });
  };

  return (
    <div className="p-6 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      {/* Header with Dark Mode Toggle */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Students
        </h1>
      </header>

      {/* Add Student Form */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg mb-6"
      >
        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Add New Student
        </h2>
        <form
          onSubmit={handleAddStudent}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={newStudent.name}
            onChange={handleInputChange}
            className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={newStudent.email}
            onChange={handleInputChange}
            className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md"
          />
          <input
            type="text"
            name="class"
            placeholder="Class"
            value={newStudent.class}
            onChange={handleInputChange}
            className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md"
          />
          <input
            type="text"
            name="section"
            placeholder="Section"
            value={newStudent.section}
            onChange={handleInputChange}
            className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md"
          />
          <input
            type="number"
            name="roll"
            placeholder="Roll Number"
            value={newStudent.roll}
            onChange={handleInputChange}
            className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md"
          />
          <button
            type="submit"
            className="flex items-center justify-center bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
          >
            <FaPlus className="mr-2" /> Add Student
          </button>
        </form>
      </motion.div>

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
            {students.map((student) => (
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

export default Students;
