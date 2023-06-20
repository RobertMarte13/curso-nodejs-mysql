import { Router } from 'express'
import { getEmployees, createEmploree, updateEmployee, deleteEmployee, getEmployee} from '../controller/employees.controller.js'

const router = Router()

router.get("/employees", getEmployees)

router.get("/employees/:id", getEmployee)

router.post("/employees", createEmploree)

router.patch("/employees/:id", updateEmployee) // put es para actualizar todo, pero si queremos actualizar cosas concretas usamos patch()

router.delete("/employees/:id", deleteEmployee)

export default router