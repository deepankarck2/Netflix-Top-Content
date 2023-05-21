const { Model, DataTypes } = require('sequelize');
const DB = require('../database/initDatabase');

const { timeStamp } = require('console');

class MovieDetails extends Model {}

MovieDetails.init({
    index: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      Movie: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      rating: {
        type: DataTypes.DOUBLE,
        allowNull: true
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      genres: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      imgUrl: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    }, {
    sequelize: DB,
    modelName: "imdbMovie",
    tableName: "imdbMovie",
    timestamps: false,
});

module.exports = MovieDetails;
