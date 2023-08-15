import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
  } catch (error) {
    throw new Error("Could not connect to MongoDB");
  }
};

export default connect;