const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Definición de los atributos del modelo
const Transacciones = sequelize.define('transaccion', {
  id_transaccion: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  producto_id_producto: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  provedor_id_provedor: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  costo: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'transaccion', // Especifica el nombre de la tabla
  timestamps: false // Desactiva la generación automática de createdAt y updatedAt
});

Transacciones.sync().then(() => {
  console.log('Tabla Transaccion creada o ya existente');
}).catch((error) => {
  console.error('Error al crear la tabla Transaccion', error);
});

module.exports = Transacciones;