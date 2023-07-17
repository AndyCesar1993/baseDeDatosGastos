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
exports.getId = exports.getUserEmail = exports.getUsers = exports.createUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const user = new user_1.default(userData);
        yield user.save();
        res.json({
            msj: 'Usuario creado correctamente',
            user
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.createUser = createUser;
const getUsers = ({}, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const condicion = {};
        const users = yield user_1.default.find(condicion);
        res.json({
            users
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.getUsers = getUsers;
const getUserEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const userEmail = yield user_1.default.findOne({ email: email });
        res.json({
            userEmail
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.getUserEmail = getUserEmail;
const getId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const userId = yield user_1.default.findOne({ _id: id });
        res.json({
            userId
        });
    }
    catch (error) {
        res.json(error);
    }
});
exports.getId = getId;
