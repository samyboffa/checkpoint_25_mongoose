const mongoose = require("mongoose");
let validator = require("validator");

let personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    favouriteFood: {
        type: [String],
        required: true,
    },
});
module.exports = mongoose.model("person", personSchema);
