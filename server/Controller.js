require("dotenv").config();
const expressAsyncHandler = require("express-async-handler");
const Portfolio = require("./portfoliomodel");
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
module.exports = { NewProfile, getPortfolio };
