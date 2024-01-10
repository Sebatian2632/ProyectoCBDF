//Establecer la conexión con un dialecto = MySQL
const { Sequelize } = require('sequelize');
const db = process.env.MYSQLDATABASE || 'proyecto_cbdf';     //render.com
const user = process.env.MYSQLUSER || 'root';         //render.com
const password = process.env.MYSQLPASSWORD || '';     //render.com
const sequelize = new Sequelize('proyecto_cbdf', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

//Probar (testear) la conexión
try {
    sequelize.authenticate();
    console.log('Conexión exitosa a la base de datos');
} catch (error) {
    console.error('No se pudo establecer la conexión con la base de datos:', error);
}

//Para poder usar la instancia de la conexión en otro contexto -> controladores
module.exports = sequelize;