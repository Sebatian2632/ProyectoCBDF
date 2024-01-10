const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Definición de los atributos del modelo
const Cliente = sequelize.define('cliente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    field: 'id_cliente'
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contacto: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Opciones del modelo
  timestamps: false,  // Desactivar los campos createdAt y updatedAt
  tableName: 'cliente', // Especifica el nombre de la tabla
});

Cliente.sync()
  .then(() => {
    console.log('Tabla cliente creada o ya existente');
  })
  .catch((error) => {
    console.log('Error al crear la tabla cliente:', error);
  });

module.exports = Cliente;