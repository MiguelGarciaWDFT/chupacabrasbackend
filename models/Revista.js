// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMA
const revistaSchema = mongoose.Schema({
	urlPdf: {
		type: String,
		required: true
	},
	imagen: {
		type: String,
		required: true
	},
    nombre: {
		type: String,
		required: true
	},
	edicion: {
		type: String,
		required: true
	},
	descripcion: {
		type: String,
		required: true
	},
	likes: {
		type: Number,
		default:0
	},
	views: {
		type: Number,
		default:0
	}
})

// 3. MODELO
const Revista = mongoose.model("Revista", revistaSchema)

// 4. EXPORTACIÓN
module.exports = Revista