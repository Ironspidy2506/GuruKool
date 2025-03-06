import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import dbConnect from "./config/db.js";
import loginRouter from "./routes/loginRouter.js";

// Declaring app
const app = express();
const port = process.env.PORT || 4000;
dbConnect();

// Express Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
  })
);

// API's
app.use("/api/login", loginRouter);

// First API Testing
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
