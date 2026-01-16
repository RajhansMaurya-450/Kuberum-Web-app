const {model} = require ("mongoose");

const {OrdersSchema} = require("../Schemas/OrdersSchema");

const OrdersModel = new model("position", OrdersSchema);

module.exports = {OrdersModel};