// 1. IMPORTACIONES
const mongoose = require("mongoose")

// 2. SCHEMAS
const userSchema = mongoose.Schema({
    typeUser:{
        type:String,//admin=administrador, user=usuario
        default: 'user'
    },
	nombre: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
})

// 3. MODELOS
const User = mongoose.model("User", userSchema)

// 4. EXPORTACIÓN
module.exports = User