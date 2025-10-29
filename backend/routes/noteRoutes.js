const express = require("express");
const router = express.Router();
const Note = requrie("../models/noteModel")

// @desc  Get all notes
// @route GET /api/notes
router.get("/", async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
});

// @desc Create note
// @route POST /api/notes
router.post("/", async (req, res) => {
    const { title, content } = req.body;
    
    const note = await Note.create({ title, content});
    res.status(201).json(note)

})

module.exports = router;