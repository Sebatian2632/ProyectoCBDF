const Cliente = require('../models/clientes.model');

//Todos los clientes
exports.obtenerTodosClientes = async(req,res) => {
    try {
        const clientes = await Cliente.findAll();
        if (clientes.length > 0) {
            res.status(200).json({
                estado : 1,
                mensaje: "Clientes encontrados",
                clientes : clientes
            });
        } else {
            res.status(404).json({
                estado: 0,
                mensaje: "No se encontraron clientes"
            })
        }
    } catch (error) {
        res.status(500).json({
            estado : 0,
            mensaje: "Ocurrió un error desconocido"
        });
    }
}
//Un cliente por ID
exports.obtenerClientePorId = async(req,res) => {
    const {id} = req.params
    try {
        const cliente = await Cliente.findByPk(id)
        if (cliente == null) {
            res.status(404).json({
                estado: 0,
                mensaje: "No se encontró cliente"
            })
        } else {
            res.status(200).json({
                estado : 1,
                mensaje: "Cliente encontrado",
                cliente : cliente
            })
        }
    } catch (error) {
        res.status(500).json({
            estado : 0,
            mensaje: "Ocurrió un error desconocido"
        })
    }
}
//Crea un cliente
exports.crearCliente = async(req,res) => {
    const {nombre, direccion, contacto} = req.body;
    try {
        if(nombre == undefined || direccion == undefined || contacto == undefined){
            res.status(400).json({
                estado : 0,
                mensaje: "Bad Request - Faltan parametros"
            })
        } else {
            const clienteC = await Cliente.create({
                nombre: nombre,
                direccion: direccion,
                contacto: contacto
            })
            res.status(200).json({
                estado : 1,
                mensaje: "Cliente creado correctamente",
                cliente : clienteC
            })
        }
    } catch (error) {
        res.status(500).json({
            estado : 0,
            mensaje: "Ocurrió un error desconocido"
        })
    }
}
//Actualizar cliente
exports.actualizarCliente = async(req,res) => {
    const {id} = req.params
    const {nombre, direccion, contacto} = req.body;
    try {
        const clienteC = await Cliente.findByPk(id)

        if (clienteC == null || nombre == undefined || direccion == undefined || contacto == undefined) {
            res.status(404).json({
                estado: 0,
                mensaje: "Faltan parámetros"
            })
        } else {
            await clienteC.update({
                nombre: nombre,
                direccion: direccion,
                contacto: contacto
            })
            res.status(200).json({
                estado : 1,
                mensaje: "Cliente actualizado",
                cliente:clienteC
            })
        }
    } catch (error) {
        res.status(500).json({
            estado : 0,
            mensaje: "Ocurrió un error desconocido"
        })
    }
}
//Eliminar cliente
exports.eliminarCliente = async(req,res) => {
    const {id} = req.params
    try {
        const cliente = await Cliente.findByPk(id)

        if (cliente == null) {
            res.status(404).json({
                estado: 0,
                mensaje: "Cliente no encontrado"
            })
        } else {
            await cliente.destroy()
            res.status(200).json({
                estado : 1,
                mensaje: "Cliente eliminado"
            })
        }
    } catch (error) {
        res.status(500).json({
            estado : 0,
            mensaje: "Ocurrió un error desconocido"
        })
    }
}