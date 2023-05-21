const { Model, DataTypes } = require('sequelize');
const DB = require('../database/initDatabase');

class Demo extends Model {}

Demo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  },
  {
    sequelize: DB,
    modelName: 'demo',
    tableName: 'demo', // Specify the desired table name here,
    timestamps: false, 
  }
);

module.exports = Demo;
