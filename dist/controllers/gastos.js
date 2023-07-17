"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addGastos = void 0;
const user_1 = __importDefault(require("../models/user"));
const addGastos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    try {
        const gastosData = req.body;
        const userEmail = yield user_1.default.findOne({ email: email });
        if (!userEmail) {
            res.json({ msj: "No se encontro el Usuario" });
            return;
        }
        yield user_1.default.updateOne({ email: email }, { $push: { gastos: gastosData } });
        res.json({ msj: "El gasto fue agregado correctamente" });
    }
    catch (error) {
        res.json(error);
    }
});
exports.addGastos = addGastos;
