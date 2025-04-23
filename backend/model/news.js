var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    newsid: {
        type: String,
        required: true,
        maxlength: 52,
    },
    title: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: true,
        unique: true
    },
    publicationdate: {
        type: Date,
        required: true
    },
     Category: {
         type: String,
         required: true
     },

})
module.exports = mongoose.model("news", userSchema);
