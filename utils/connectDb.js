import mongoose from "mongoose";

const connectDb = async () => {
  mongoose.connect(process.env.DB_URI);
};

export default connectDb;
