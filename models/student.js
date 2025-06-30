
const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    class: String,
    rollNumber: { type: String, unique: true }
});

module.exports = mongoose.model("Student", studentSchema);
