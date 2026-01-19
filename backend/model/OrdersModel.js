const {model} = require ("mongoose");

const OrdersSchema = require("../Schemas/OrdersSchema");

const OrdersModel = new model("Orders", OrdersSchema);

module.exports = OrdersModel;