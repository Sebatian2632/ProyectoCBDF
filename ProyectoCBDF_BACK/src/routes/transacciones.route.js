const express = require('express')
const router = express.Router()
const transaccionesController = require('../controllers/transacciones.controller')

//Definir las rutas

router.get('/', transaccionesController.obtenerTodasTransacciones);
router.get('/:id', transaccionesController.obtenerTransaccionPorId);
router.post('/', transaccionesController.crearTransaccion);
router.put('/:id', transaccionesController.actualizarTransaccion);
router.delete('/:id', transaccionesController.eliminarTransaccion);

module.exports = router;