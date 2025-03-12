import React, { useState, useEffect, useContext } from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import { AdminContext } from "../../context/AdminContext.jsx";
import { toast } from "react-toastify";

const AddStudent = () => {
  const { atoken } = useContext(AdminContext);
  const [newStudent, setNewStudent] = useState({
    name: "",
    email: "",
    class: "",
    section: "",
    roll: "",
    dob: "",
    gender: "",
    phone: "",
    address: "",
    admissionNumber: "",
    fatherName: "",
    fatherContact: "",
    motherName: "",
    motherContact: "",
    bloodGroup: "",
    medicalConditions: "",
    emergencyContact: "",
    transportFacility: "None",
    hostelFacility: "None",
  });

  const [studentPhoto, setStudentPhoto] = useState(null);

  const handleInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setStudentPhoto(e.target.files[0]);
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append student details
    Object.keys(newStudent).forEach((key) => {
      formData.append(key, newStudent[key]);
    });

    // Append student photo if selected
    if (studentPhoto) {
      formData.append("studentPhoto", studentPhoto);
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/students/add-student",
        formData,
        {
          headers: { atoken, "Content-Type": "multipart/form-data" },
        }
      );

      if (data.success) {
        toast.success(data.message);
        setNewStudent({
          name: "",
          email: "",
          class: "",
          section: "",
          roll: "",
          dob: "",
          gender: "",
          phone: "",
          address: "",
          admissionNumber: "",
          fatherName: "",
          fatherContact: "",
          motherName: "",
          motherContact: "",
          bloodGroup: "",
          medicalConditions: "",
          emergencyContact: "",
          transportFacility: "None",
          hostelFacility: "None",
        });
        setStudentPhoto(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message);
    }
  };

  return (
    <div className="p-6 dark:bg-gray-900 min-h-screen">
      {/* Header with Dark Mode Toggle */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Add Student
        </h1>
      </header>

      <div>
        {/* Add Student Form */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg mb-6"
        >
          <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Add New Student
          </h1>
          <form onSubmit={handleAddStudent} className="dark:text-white">
            <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Personal Details
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {" "}
              <label className="flex flex-col">
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={newStudent.name}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={newStudent.email}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Date of Birth
                <input
                  type="date"
                  name="dob"
                  value={newStudent.dob}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Gender
                <select
                  name="gender"
                  value={newStudent.gender}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </label>
              <label className="flex flex-col">
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={newStudent.phone}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Address
                <input
                  name="address"
                  placeholder="Enter Address"
                  value={newStudent.address}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Class
                <select
                  name="class"
                  value={newStudent.class}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Class</option>
                  {[...Array(12)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      Class {index + 1}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col">
                Section
                <input
                  type="text"
                  name="section"
                  placeholder="Section"
                  value={newStudent.section}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Roll Number
                <input
                  type="number"
                  name="roll"
                  placeholder="Roll Number"
                  value={newStudent.roll}
                  onChange={handleInputChange}
                  onBlur={(e) => e.target.blur()}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Admission Number
                <input
                  type="text"
                  name="admissionNumber"
                  placeholder="Admission Number"
                  value={newStudent.admissionNumber}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
            </div>

            <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Family Details
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {" "}
              <label className="flex flex-col">
                Father Name
                <input
                  type="text"
                  name="fatherName"
                  placeholder="Father Name"
                  value={newStudent.fatherName}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Father Contact
                <input
                  type="tel"
                  name="fatherContact"
                  placeholder="Father Contact"
                  value={newStudent.fatherContact}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Mother Name
                <input
                  type="text"
                  name="motherName"
                  placeholder="Mother Name"
                  value={newStudent.motherName}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Mother Contact
                <input
                  type="tel"
                  name="motherContact"
                  placeholder="Mother Contact"
                  value={newStudent.motherContact}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
            </div>

            <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Health & Emergency Details
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {" "}
              <label className="flex flex-col">
                Blood Group
                <input
                  type="text"
                  name="bloodGroup"
                  placeholder="Blood Group"
                  value={newStudent.bloodGroup}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Medical Conditions
                <input
                  name="medicalConditions"
                  placeholder="Any known medical conditions"
                  value={newStudent.medicalConditions}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Emergency Contact
                <input
                  type="tel"
                  name="emergencyContact"
                  placeholder="Emergency Contact"
                  value={newStudent.emergencyContact}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
            </div>

            <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Student Record Details
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {" "}
              <label className="flex flex-col">
                Student Photo
                <input
                  type="file"
                  name="studentPhoto"
                  onChange={handleFileChange}
                  className="p-2.5 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Transport Facility
                <select
                  name="transportFacility"
                  value={newStudent.transportFacility}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="None">None</option>
                  <option value="School Bus">School Bus</option>
                  <option value="Personal Transport">Personal Transport</option>
                </select>
              </label>
              <label className="flex flex-col">
                Hostel Facility
                <select
                  name="hostelFacility"
                  value={newStudent.hostelFacility}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="None">None</option>
                  <option value="School Hostel">School Hostel</option>
                  <option value="PG">PG</option>
                </select>
              </label>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="flex items-center justify-center w-2/6 bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition"
              >
                <FaPlus className="mr-2" /> Add Student
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AddStudent;
