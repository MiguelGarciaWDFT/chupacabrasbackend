//importacion de la revista
const Revista = require("./../models/Revista")
//creacion de la revista
exports.create = async (req,res) =>{
//del formulario creamos variables y asignamos valores
const { 
    imagen,
    nombre,
    edicion,
    descripcion
 } = req.body
//crear una guitarra en base de datos
try{
const newRevista = await Revista.create({
imagen,
nombre,
edicion,
descripcion
})
//devolver una respuesta en un formato json
res.json({
    msg:"Revista creada",
    data:newRevista
})

}catch(error){
res.status(500).json({
    msg:"Error al crear la revista",
    error:error
})
}
}

exports.readAll = async (req, res) => {

	try {
		
		const revistas = await Revista.find({})

		res.json({
			msg: "Revistas obtenidas con éxito.",
			data: revistas
		})


	} catch (error) {
		
		res.status(500).json({
	 		msg: "Hubo un error obtener las revistas.",
			error: error
		})

	}

}

exports.readOne = async (req, res) => {

	const { id } = req.params

	try {
		
		const revista = await Revista.findById(id)

		res.json({
			msg: "Revista obtenida con éxito.",
			data: revista
		})

	} catch (error) {
		res.status(500).json({
			msg: "Hubo un error al obtener la revista",
			error: error
		})
	}


}

exports.edit = async (req, res) => {
	
	const { id } = req.params

	const { 
	    imagen,
        nombre,
        edicion,
        descripcion
	} = req.body


	try {
		const updatedRevista = await Revista.findByIdAndUpdate(
			id, // ID DE LA REVISTA
			{
	        imagen,
            nombre,
            edicion,
            descripcion // PROPIEDADES A CAMBIAR
			}, 
			{new: true}
		)
console.log(updatedRevista);
		res.json({
			msg: "Revista actualizada con éxito.",
			data: updatedRevista
		})

		
	} catch (error) {
		
		res.status(500).json({
			msg: "Error al actualizar la revista.",
			error: error
		})

	}
}

exports.delete = async (req, res) => {

	const { id } = req.params

	try {
		
		const deletedRevista = await Revista.findByIdAndRemove({_id: id})

		res.json({
			msg: "Revista borrada con éxito.",
			data: deletedRevista
		})

	} catch (error) {
		res.status(500).json({
			msg: "Error al borrar la revista.",
			error: error
		})
	}

}