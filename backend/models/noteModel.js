const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    // title of note to store, is required
    title: {
        type: String,
        required: true,
    },
    content: {  // required content of note
        type: String,
        required: true,
    },
}, { timestamps: true }); // keeps date

module.exports = mongoose.model("Note", noteSchema)