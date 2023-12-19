
const mongoose = require("mongoose");

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://admin:admin@cluster0.hokcvi3.mongodb.net/?retryWrites=true&w=majority"
        
    )

    .then(() => console.log("MongoDB Atlas CONECTADO"))
    .catch((err) => console.log(err));
};
module.exports =  connectDB;
