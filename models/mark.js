
const mongoose = require("mongoose");

const markSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    subject: String,
    marks: Number
});

module.exports = mongoose.model("Mark", markSchema);
