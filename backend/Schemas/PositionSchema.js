const { Schema } = require("mongoose");
const PositionSchema = new Schema({

    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: Number,

});

module.exports = {PositionSchema};