const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/initDatabase');

class Top10Movie extends Model {}

Top10Movie.init({
    index: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
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
    sequelize,
    modelName: "netflixTopMovie10",
    tableName: "netflixTopMovie10",
    timestamps: false,
});

module.exports = Top10Movie;
