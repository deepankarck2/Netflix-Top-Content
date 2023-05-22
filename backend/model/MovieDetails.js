const { Model, DataTypes } = require('sequelize');
const DB = require('../database/initDatabase');
const { timeStamp } = require('console');
const Top10Movie = require('./Top10Movie')

class MovieDetails extends Model {}

MovieDetails.init({
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
      },
      imdb_id: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      fk_id: {
        type: DataTypes.INTEGER,
        references: {
          // This is a reference to another model
          model: Top10Movie,
          // This is the column name of the referenced model
          key: 'id',
        }
      }
    }, {
    sequelize: DB,
    modelName: "imdbMovie",
    tableName: "imdbMovie",
    timestamps: false,
});

MovieDetails.belongsTo(Top10Movie, {
  foreignKey: 'fk_id',
  as: 'top10movie'
});

Top10Movie.hasOne(MovieDetails, {
  foreignKey: 'fk_id',
  as: 'moviedetails'
});

module.exports = MovieDetails;
