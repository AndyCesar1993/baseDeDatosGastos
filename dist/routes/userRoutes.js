"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const gastos_1 = require("../controllers/gastos");
const router = (0, express_1.Router)();
router.post('/', users_1.createUser);
router.get('/', users_1.getUsers);
router.get('/:email', users_1.getUserEmail);
router.get('/userId/:id', users_1.getId);
router.put('/gastos/:email', gastos_1.addGastos);
exports.default = router;