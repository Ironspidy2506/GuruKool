import mongoose from "mongoose";

const staffSchema = new mongoose.Schema(
  {
    
  },
  { timestamps: true }
);

const Staff = mongoose.model("Staff", staffSchema);
export default Staff;
