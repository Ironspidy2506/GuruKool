import Student from "../models/Student.js";

// To get a student by id
const getStudentById = async (req, res) => {
  try {
    const { _id } = req.body;

    const student = await Student.findById(_id);
    if (!student) {
      return res.json({
        success: false,
        message: "No student found",
      });
    }

    return res.json({
      success: false,
      student,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// To add a student
const addStudent = async (req, res) => {
  try {
    const {
      name,
      email,
      dob,
      gender,
      phone,
      address,
      class: studentClass, // Rename to avoid keyword conflict
      section,
      roll,
      admissionNumber,
      fatherName,
      fatherContact,
      motherName,
      motherContact,
      bloodGroup,
      medicalConditions,
      emergencyContact,
      transportFacility,
      hostelFacility,
    } = req.body;

    // Create student object
    const student = new Student({
      name,
      email,
      dob,
      gender,
      phone,
      address,
      class: studentClass, // Use renamed variable
      section,
      roll,
      admissionNumber,
      fatherName,
      fatherContact,
      motherName,
      motherContact,
      bloodGroup,
      medicalConditions,
      emergencyContact,
      transportFacility,
      hostelFacility,
      studentPhoto: req.file
        ? {
            data: req.file.buffer, // Store image buffer
            contentType: req.file.mimetype, // Store image type (e.g., 'image/png')
          }
        : null, // Handle case where no image is uploaded
    });

    await student.save();

    return res.json({
      success: true,
      message: "Student added successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// To edit a student
const editStudent = async (req, res) => {
  try {
    const { _id } = req.params;

    await Student.findByIdAndUpdate(_id);

    return res.json({
      success: true,
      message: "Student updated successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// To delete a student
const deleteStudent = async (req, res) => {
  try {
    const { _id } = req.params;

    await Student.findByIdAndDelete(_id);

    return res.json({
      success: true,
      message: "Student deleted successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export { getStudentById, addStudent, editStudent, deleteStudent };
