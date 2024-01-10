const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Definición de los atributos del modelo
const Proveedor = sequelize.define('proveedor', {
  id_proveedor: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
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
  tableName: 'proveedor', // Especifica el nombre de la tabla
  timestamps: false // Desactiva la generación automática de createdAt y updatedAt
});

Proveedor.sync().then(() => {
  console.log('Tabla Proveedor creada o ya existente');
}).catch((error) => {
  console.error('Error al crear la tabla Proveedor', error);
});


module.exports = Proveedor;