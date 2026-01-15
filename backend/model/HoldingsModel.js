const {model} = require ("mongoose");

const {HoldingSchema} = require("../Schemas/HoldingsSchema");

const HoldingModel = new model("holding", HoldingSchema);

module.exports = {HoldingModel};
