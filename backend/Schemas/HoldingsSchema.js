const { Schema } = require("mongoose");
const HoldingsSchema = new Schema({

    name: "BHARTIARTL",
    qty: String,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean,
});

module.exports = {HoldingsSchema};