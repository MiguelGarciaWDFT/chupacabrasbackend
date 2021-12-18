//importaciones
const express 		= require("express")
const router		= express.Router()

const revistaController	= require("./../controllers/revistaController")

//RUTEO (ROUTER)
// CREAR revista
router.post("/create", revistaController.create)

// LEER revistas
router.get("/readall", revistaController.readAll)

//leer una revista
router.get("/readone/:id", revistaController.readOne)

//actualizar una revista
router.put("/edit/:id", revistaController.edit)

//borrar una revista
router.delete("/delete/:id", revistaController.delete)

//exportaciones
module.exports = router