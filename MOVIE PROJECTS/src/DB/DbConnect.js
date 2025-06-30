const mongoose = require("mongoose");
require("dotenv").config();

const DbConnect = async () => {
 const connections = await mongoose.connect(process.env.DB_URL);
  console.log(`Mongoose connected ....... `,`MongoDB Host ${connections.connection.host}`);
};

module.exports = DbConnect;