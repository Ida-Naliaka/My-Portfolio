require("dotenv").config();
const expressAsyncHandler = require("express-async-handler");
const Portfolio = require("./portfoliomodel");
const Resume = require("./resumeModel");
const User = require("./userModel");
const bcrypt= require('bcryptjs')

//register user
const NewUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password ) {
    res.status(400);
    throw new Error("Please fill in all the Fields");
  } 
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  try {
    const user = await User.create({
      email: email.toLowerCase(),
      password: bcrypt.hashSync(password, 8),
    });
    if (user) {
      res.status(201).json({
        _id: user._id,
        email: user.email,
      });
    } else {
      throw new Error("Failed to create user");
    }
  } catch (error) {
    console.log('signup', error);
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Please fill in all the Fields");
  }
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(201).json({
        _id: user._id,
        email: user.email,
      });
    } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  } 
  } catch (error) {
    console.log('login',error)
  }
};
const NewProfile = expressAsyncHandler(async (req, res) => {
  const { name, description, url, image, sourcecode } = req.body;
  if (!name || !description || !url || !image || !sourcecode) {
    console.log("portfolio not sent with request");
    return res.sendStatus(400);
  }
  try {
    console.log(name);
    const object = await Portfolio.create({
      name,
      description,
      url,
      sourcecode,
      image,
    });
    if (object) {
      res.status(201).json(object);
    }
  } catch (error) {
    console.log(error);
  }
});
const getPortfolio = expressAsyncHandler(async (req, res) => {
  try {
    await Portfolio.find()
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});
const NewResume = expressAsyncHandler(async (req, res) => {
  const url= req.body.url;
  if (!url) {
    console.log("url not sent with request");
    return res.sendStatus(400);
  }
  try {
    const object = await Resume.create({
     url
    });
    if (object) {
      res.status(201).json(object);
    }
  } catch (error) {
    console.log(error);
  }
});
const getResume = expressAsyncHandler(async (req, res) => {
  try {
    await Resume.find()
      .limit(1)
      .sort({$natural:-1})//get last entry
      .then(async (results) => {
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});
module.exports = { NewProfile, getPortfolio, NewResume, getResume, login, NewUser };
