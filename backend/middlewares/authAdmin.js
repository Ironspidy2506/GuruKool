import jwt from "jsonwebtoken";

const authAdmin = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized Login Again",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (decode !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD) {
      return res.json({ success: false, message: "Invalid token" });
    }

    next();
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Login Auth server error" });
  }
};

export default authAdmin;
