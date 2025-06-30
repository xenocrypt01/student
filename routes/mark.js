
const express = require("express");
const router = express.Router();
const Mark = require("../models/Mark");

router.post("/", async (req, res) => {
    try {
        const mark = new Mark(req.body);
        await mark.save();
        res.status(201).send(mark);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/:studentId", async (req, res) => {
    const marks = await Mark.find({ studentId: req.params.studentId });
    res.send(marks);
});

module.exports = router;
