import mongoose from "mongoose";

const dbConnect = async (req, res) => {
  try {
    mongoose.connection.on("connected", () =>
      console.log("Database connected successfully!!")
    );
    await mongoose.connect(`${process.env.MONGODB_URL}`)
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;