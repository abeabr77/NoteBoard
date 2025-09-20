const express = require("express");
const router = express.Router();

// @desc  Get all notes
// @route GET /api/notes
router.get("/", (req, res) => {
    res.json({ message: "Get all notes"});
});

// @desc Create note
// @route POST /api/notes
router.post("/", (req, res) => {
    const { title, content } = req.body;
    res.json({ message: "Note created", note: { title, content} });
})

module.exports = router;