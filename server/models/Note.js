const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },
    priority: {
        type: Number
    }
},
{
    timestamps: true
})

const Note = mongoose.model('Note', noteSchema);
module.exports = Note;