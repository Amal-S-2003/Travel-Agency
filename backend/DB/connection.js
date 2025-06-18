const { mongoose } = require("mongoose");

const connectionString = process.env.MONGO_URI; 
console.log(connectionString);


mongoose 
  .connect(connectionString)
  .then(() => {
    console.log("MongoDB Connected SuccessFull");
  })
  .catch((err) => {
    console.log("MongoDB Error", err);
  });
 