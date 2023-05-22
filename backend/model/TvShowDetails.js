const { Model, DataTypes } = require('sequelize');
const DB = require('../database/initDatabase');
const Top10TvShow = require('./Top10TvShow')

class TvShowDetails extends Model {}

TvShowDetails.init({
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        rank: {
            type: DataTypes.BIGINT,
            allowNull: true,
        },
        TV: {
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
              model: Top10TvShow,
              // This is the column name of the referenced model
              key: 'id',
            }
          }
    },{
        sequelize: DB,
        modelName: "imdbTV",
        tableName: "imdbTV",
        timestamps: false,
    }
)

TvShowDetails.belongsTo(Top10TvShow, {
    foreignKey: 'fk_id',
    as: 'top10tvshow'
  });
  
Top10TvShow.hasOne(TvShowDetails, {
    foreignKey: 'fk_id',
    as: 'tvshowdetails'
});

module.exports = TvShowDetails;