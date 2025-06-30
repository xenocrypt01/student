
const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.post("/", async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/", async (req, res) => {
    const students = await Student.find();
    res.send(students);
});

module.exports = router;
