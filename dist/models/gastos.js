"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GastosSchema = new mongoose_1.Schema({
    name: { type: String, unique: true },
    price: { type: Number, required: true },
});
const Gastos = (0, mongoose_1.model)("Gastos", GastosSchema);
exports.default = Gastos;
