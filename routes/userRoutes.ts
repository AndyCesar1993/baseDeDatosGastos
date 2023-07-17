import { Router } from "express";
import { createUser,getUsers,getUserEmail,getId } from "../controllers/users";
import { addGastos } from "../controllers/gastos";

const router = Router()

router.post('/', createUser)
router.get('/', getUsers)
router.get('/:email', getUserEmail)
router.get('/userId/:id', getId)
router.put('/gastos/:email', addGastos)

export default router