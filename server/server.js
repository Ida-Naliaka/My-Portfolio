const express = require("express");
const mongoose = require("mongoose");
const portfolioRoute = require("./portfolioRoute");
const path = require("path");
require('dotenv').config();

const app = express();
app.use(express.json()); //accept json data
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};
connectDB();

app.use("/api/portfolio", portfolioRoute);
//-------------------------deployment setup
const __dirname2 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname2, "../portfolio/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname2, "portfolio", "build", "index.html"))
  );
} else {
  console.log("API is running successfully..");
}
//-------------------------deployment setup

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server Started on PORT ${port}`));
