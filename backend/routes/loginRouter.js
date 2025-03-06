import express from "express";
import { loginAdmin } from "../controllers/loginController.js";
const loginRouter = express.Router();

loginRouter.post("/admin", loginAdmin);

export default loginRouter;
