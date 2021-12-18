// 1. IMPORTACIONES
const express 		= require("express")
const app			= express()
//const cors = require("cors")
require("dotenv").config()

const connectDB = require('./config/db')

// 2. MIDDLEWARES
//base de datos
connectDB()

// HABILITAR CORS (ACCESOS DE AMBIENTES DE DESARROLLO DE TERCEROS)
//app.use(cors())

// TODAS LAS PETICIONES Y RESPUESTAS SE MANEJAN
// EN PROTOLOCO JSON
app.use(express.json())

// 3. RUTAS
app.use("/revistas", require("./routes/revistas"))
app.use("/users", require("./routes/users"))

//app.use("/")

// 4. SERVER
app.listen(process.env.PORT, () => {

	console.log(`Servidor trabajando en el puerto ${process.env.PORT}`)

})