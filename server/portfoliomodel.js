const mongoose = require("mongoose");
const portfolioSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String, required: true },
    sourcecode: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);
const Portfolio = mongoose.model("Portfolio", portfolioSchema);

module.exports = Portfolio;
