import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    dob: { type: Date, required: true },
    gender: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    class: { type: String, required: true },
    section: { type: String, required: true },
    roll: { type: String, required: true, unique: true },
    admissionNumber: { type: String, required: true, unique: true },
    fatherName: { type: String, required: true },
    fatherContact: { type: String, required: true },
    motherName: { type: String, required: true },
    motherContact: { type: String, required: true },
    bloodGroup: { type: String },
    medicalConditions: { type: String },
    emergencyContact: { type: String },
    transportFacility: { type: String, default: "None" },
    hostelFacility: { type: String, default: "None" },
    studentPhoto: {
      data: Buffer, // Store the image as binary data
      contentType: String, // Store the image type (e.g., 'image/png', 'image/jpeg')
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;
