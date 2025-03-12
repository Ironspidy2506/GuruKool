import React, { useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import { AdminContext } from "./context/AdminContext.jsx";
import { UserContext } from "./context/UserContext.jsx";
import { ManagerContext } from "./context/ManagerContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AutoLogout from "./utils/AutoLogout.jsx";
import Students from "./pages/Admin/Students.jsx";
import Teachers from "./pages/Admin/Teachers.jsx";
import AddStudent from "./components/Students/AddStudent.jsx";
import AddTeacher from "./components/Teachers/AddTeacher.jsx";

const App = () => {
  const { atoken } = useContext(AdminContext);
  const { mtoken } = useContext(ManagerContext);
  const { token } = useContext(UserContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return atoken || mtoken || token ? (
    <>
      <AutoLogout />
      <div className="flex flex-col min-h-screen">
        <Navbar toggleSidebar={toggleSidebar} />
        <div className="flex flex-1">
          {/* Sidebar: Adjusted for responsiveness */}
          <Sidebar
            isOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            className={`fixed inset-y-0 left-0 w-64 bg-gray-800 dark:bg-slate-900 transform ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:relative md:translate-x-0 transition-transform duration-300`}
          />

          <div className="flex-1 pt-20 px-4 md:ml-64 lg:px-8 dark:bg-slate-900">
            <ToastContainer />
            <Routes>
              {/* Admin Routes */}
              <Route
                path="/"
                element={
                  <div className="text-center mt-5">
                    <h2 className="text-xl font-semibold mb-4 text-green-500">
                      Welcome to the{" "}
                      {atoken ? "Admin" : mtoken ? "Manager" : "Employee"}{" "}
                      Dashboard!
                    </h2>
                    <h3 className="text-lg font-semibold text-green-500">
                      Please select an option to continue!
                    </h3>
                  </div>
                }
              />
              <Route path="/admin-dashboard" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/students/add-student" element={<AddStudent />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/teachers/add-teacher" element={<AddTeacher />} />



              {/* Employee Routes */}
              

              {/* Manager Routes */}
              
            </Routes>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
