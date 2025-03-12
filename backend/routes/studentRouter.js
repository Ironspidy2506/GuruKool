import express from "express";
import {
  addStudent,
  deleteStudent,
  editStudent,
} from "../controllers/studentController.js";
import authAdmin from "../middlewares/authAdmin.js";
import upload from "../config/multer.js";
const studentRouter = express.Router();

// Routes to add a student
studentRouter.post(
  "/add-student",
  upload.single("studentPhoto"),
  authAdmin,
  addStudent
);

// Routes to edit a student
studentRouter.post(
  "/edit-student/:id",
  upload.single("studentPhoto"),
  authAdmin,
  editStudent
);

// Routes to delete a student
studentRouter.delete("/delete-student/:id", authAdmin, deleteStudent);

export default studentRouter;
