import mongoose from "mongoose";


export const DbConnect = async () => {

  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log(`MongoDB Conected......`);
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }

}
