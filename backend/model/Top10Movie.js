const { Model, DataTypes } = require('sequelize');
const DB = require('../database/initDatabase');

class Top10Movie extends Model {}

Top10Movie.init({
      id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      rank: {
        type: DataTypes.BIGINT,
        allowNull: false,
      },
      Movie: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      weeksTop10: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      hoursViewed: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
    sequelize: DB,
    modelName: "netflixTopMovie10",
    tableName: "netflixTopMovie10",
    timestamps: false,
});

module.exports = Top10Movie;
