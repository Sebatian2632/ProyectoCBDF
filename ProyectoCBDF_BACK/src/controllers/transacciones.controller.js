const Transaccion = require('../models/transacciones.model');

exports.obtenerTodasTransacciones = async (req, res) => {
    try {
      const transacciones = await Transaccion.findAll({ attributes: ['id_proveedor', 'producto_id_producto', 'provedor_id_provedor', 'costo', 'cantidad', 'fecha'],});
      res.status(200).json({
        estado: 1,
        mensaje: "Transacciones encontradas",
        transacciones: transacciones
      });
    } catch (error) {
      console.error('Error al obtener todas las transacciones:', error);
      res.status(500).json({
        estado: 0,
        mensaje: "Ocurrió un error al obtener las transacciones",
        transacciones: []
      });
    }
  }
  
//Un Proveedor por ID
exports.obtenerTransaccionPorId = async(req,res) => {
    const{id} = req.params;
    try {
        const transaccion = await Transaccion.findByPk(id, { attributes: ['id_proveedor', 'producto_id_producto', 'provedor_id_provedor', 'costo', 'cantidad', 'fecha'], });
        if(transaccion == null){
            res.status(404).json({
                estado: 0,
                mensaje: "Transaccion no encontrado",
                transacciones : []
            })
        }else{
        res.status(200).json({
            estado: 1,
            mensaje: "Transaccion encontrado",
            transacciones : transaccion
        })}
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrio un error desconocido",
            transacciones : []
        })
    }
}
//Cree un Proveedor
exports.crearTransaccion = async (req, res) => {
    const {id_proveedor, producto_id_producto, provedor_id_provedor, costo, cantidad, fecha } = req.body;
    
    try {
        if (id_proveedor == undefined || producto_id_producto == undefined || provedor_id_provedor == undefined || costo == undefined || cantidad ==undefined || fecha == undefined){
            res.status(404).json({
                estado: 0,
                mensaje: "Bad request - Faltan parametros",
                proveedores: []
            });
        } else {
            const transaccion = await Transaccion.create({
                id_proveedor: id_proveedor,
                producto_id_producto: producto_id_producto,
                provedor_id_provedor: provedor_id_provedor,
                costo: costo, 
                cantidad: cantidad, 
                fecha: fecha
            }, {
                attributes: ['id_proveedor', 'producto_id_producto', 'provedor_id_provedor', 'costo', 'cantidad', 'fecha']
            });

            const transaccionPlain = transaccion.get({ plain: true });

            res.status(200).json({
                estado: 1,
                mensaje: "Transaccion creado correctamente",
                transacciones: transaccionPlain
            });
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrió un error desconocido",
            transacciones: []
        });
    }
};


//Actualizar un Transaccion
exports.actualizarTransaccion= async(req,res) => {
    const {id} = req.params;
    const {id_proveedor, producto_id_producto, provedor_id_provedor, costo, cantidad, fecha } = req.body;
    try {
        const transaccion = await Transaccion.findByPk(id, { attributes: ['id_proveedor', 'producto_id_producto', 'provedor_id_provedor', 'costo', 'cantidad', 'fecha']});
        if (transaccion == null) {
            res.status(404).json({
                estado: 0,
                mensaje: "Transaccion no encontrado",
                transacciones : []
            })
        } else {
            if (producto_id_producto == undefined || provedor_id_provedor == undefined || costo == undefined || cantidad ==undefined || fecha == undefined){
                res.status(400).json({
                    estado: 0,
                    mensaje: "Faltan parámetros",
                    transacciones : []
                })
            } else {
                await transaccion.update({
                    producto_id_producto: producto_id_producto,
                    provedor_id_provedor: provedor_id_provedor,
                    costo: costo, 
                    cantidad: cantidad, 
                    fecha: fecha
                })
                res.status(200).json({
                    estado: 1,
                    mensaje: "Transaccion actualizado con exito",
                    transacciones : transaccion
                })
            }
        }
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrio un error desconocido",
            transacciones : []
        })
    }
}
//Eliminar transaccion
exports.eliminarTransaccion = async(req,res) => {
    const{id} = req.params;
    try {
        const transaccion = await Transaccion.findByPk(id, { attributes: ['id_proveedor', 'producto_id_producto', 'provedor_id_provedor', 'costo', 'cantidad', 'fecha']});
        if(transaccion == null){
            res.status(404).json({
                estado: 0,
                mensaje: "Transaccion no encontrado",
                transacciones : []
            })
        }else{
        await proveedor.destroy();
        res.status(200).json({
            estado: 1,
            mensaje: "Transaccion eliminado con exito",
            transacciones : transaccion
        })}
    } catch (error) {
        res.status(500).json({
            estado: 0,
            mensaje: "Ocurrio un error desconocido",
            transacciones : []
        })
    }
}
