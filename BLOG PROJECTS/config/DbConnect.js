import mongoose from "mongoose";

export const DbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nodepractice:nodepractice@cluster0.sk2g4jt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB Connected...");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
