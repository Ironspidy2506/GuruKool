import axios from "axios";
import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = (props) => {
  const [atoken, setAToken] = useState(
    localStorage.getItem("atoken") ? localStorage.getItem("atoken") : ""
  );

  const [students, setStudents] = useState([]);
  const getStudents = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/students/get-students",
        {
          headers: { atoken },
        }
      );

      setStudents(data.students);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const value = {
    atoken,
    setAToken,
    students,
    setStudents, 
    getStudents
  };

  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
