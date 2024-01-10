const express = require('express');
const cors = require('cors'); // Require the cors middleware
const routesTransacciones = require('./src/routes/transacciones.route');
const app = express();
const puerto = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

// Configuración del servidor
app.use(express.json());
app.use('/socios/v1/transacciones', routesTransacciones);

// Ejecutar el servidor
app.listen(puerto, () => {
    console.log("Servidor escuchando en el puerto:", puerto);
});
