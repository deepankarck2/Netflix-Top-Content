const { Model, DataTypes } = require('sequelize');
const DB = require('../database/initDatabase');
const Top10TvShow = require('./Top10TvShow')

class RottenTomatosMovie extends Model {}

RottenTomatosMovie.init({
        rank: {
            type: DataTypes.BIGINT,
            allowNull: true,
            allowNull: false,
            primaryKey: true,
        },
        Movie: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        audience_score: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        tomatometer: {
            type: DataTypes.BIGINT,
            allowNull: true
        },
        fk_id: {
            type: DataTypes.INTEGER,
            references: {
              // This is a reference to another model
            //   model: Top10TvShow,
            //   // This is the column name of the referenced model
            //   key: 'id',
            }
          }
    },{
        sequelize: DB,
        modelName: "rottenTomatoesMovie",
        tableName: "rottenTomatoesMovie",
        timestamps: false,
    }
)

module.exports = RottenTomatosMovie;