import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const AddTeacher = () => {
  const [newTeacher, setNewTeacher] = useState({
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

  const [teacherPhoto, setTeacherPhoto] = useState(null);

  const handleInputChange = (e) => {
    setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setTeacherPhoto(e.target.files[0]);
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(newTeacher).forEach((key) => {
      formData.append(key, newTeacher[key]);
    });
    if (studentPhoto) {
      formData.append("teacherPhoto", teacherPhoto);
    }

    try {
      await axios.post("http://localhost:5000/api/students", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setNewTeacher({
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
      setTeacherPhoto(null);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="p-6 dark:bg-gray-900 min-h-screen">
      {/* Header with Dark Mode Toggle */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          Add Teacher
        </h1>
      </header>

      <div>
        {/* Add Student Form */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg mb-6"
        >
          <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
            Add New Teacher
          </h1>
          <form onSubmit={handleAddStudent} className="dark:text-white">
            <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Personal Details
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              {" "}
              <label className="flex flex-col">
                Employee Number
                <input
                  type="text"
                  name="employeeNumber"
                  placeholder="Employee Number"
                  value={newTeacher.employeeNumber}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={newTeacher.name}
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
                  value={newTeacher.email}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Date of Birth
                <input
                  type="date"
                  name="dob"
                  value={newTeacher.dob}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Gender
                <select
                  name="gender"
                  value={newTeacher.gender}
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
                  value={newTeacher.phone}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Address
                <input
                  name="address"
                  placeholder="Enter Address"
                  value={newTeacher.address}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Class
                <input
                  type="text"
                  name="class"
                  placeholder="Class"
                  value={newTeacher.class}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Subject
                <select
                  name="subject"
                  value={newTeacher.subject}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Select Subject</option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Science">Science</option>
                  <option value="Social Studies">Social Studies</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="Computer Science">Computer Science</option>
                </select>
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
                  value={newTeacher.fatherName}
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
                  value={newTeacher.fatherContact}
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
                  value={newTeacher.motherName}
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
                  value={newTeacher.motherContact}
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
                  value={newTeacher.bloodGroup}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Medical Conditions
                <input
                  name="medicalConditions"
                  placeholder="Any known medical conditions"
                  value={newTeacher.medicalConditions}
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
                  value={newTeacher.emergencyContact}
                  onChange={handleInputChange}
                  className="p-3 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
            </div>

            <h1 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">
              Teacher Record Details
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {" "}
              <label className="flex flex-col">
                Student Photo
                <input
                  type="file"
                  name="studentPhoto"
                  onChange={handleInputChange}
                  className="p-2.5 border dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </label>
              <label className="flex flex-col">
                Transport Facility
                <select
                  name="transportFacility"
                  value={newTeacher.transportFacility}
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
                  value={newTeacher.hostelFacility}
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

export default AddTeacher;
