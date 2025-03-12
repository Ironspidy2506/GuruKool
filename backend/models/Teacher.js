import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    
  },
  { timestamps: true }
);

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
