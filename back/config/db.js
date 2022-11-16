require('dotenv/config');

const mongoose = require('mongoose');
const config = require('config');


const connectDB = async () => {
  console.log(process.env.DB_URI);
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);

    process.exit(1);
  }
};

module.exports = connectDB;
