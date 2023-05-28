const { Model, DataTypes } = require('sequelize');
const DB = require('../database/initDatabase');
const Top10TvShow = require('./Top10TvShow')

class RottenTomatosTV extends Model {}

RottenTomatosTV.init({
        rank: {
            type: DataTypes.BIGINT,
            allowNull: true,
            allowNull: false,
            primaryKey: true,
        },
        TV: {
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
        modelName: "rottenTomatoesTv",
        tableName: "rottenTomatoesTv",
        timestamps: false,
    }
)

module.exports = RottenTomatosTV;