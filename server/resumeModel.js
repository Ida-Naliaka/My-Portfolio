const mongoose = require("mongoose");
const resumeSchema = mongoose.Schema(
  {
    url: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);
const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
