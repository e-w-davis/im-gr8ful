const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gr8Schema = new Schema(
    {
        body: String,
        date: Date,
    });

const gr8 = mongoose.model('gr8', gr8Schema);

module.exports = gr8;