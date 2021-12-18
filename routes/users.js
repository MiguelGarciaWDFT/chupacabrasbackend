// 1. IMPORTACIONES
const express	= require("express")
const router	= express.Router()

const userController	= require("./../controllers/userController")

// 2. ROUTER
// CREAR USUARIO
router.post("/create", userController.create)

// 3. EXPORTACIÓN
module.exports = router