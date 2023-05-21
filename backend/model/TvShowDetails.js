const { Model, DataTypes } = require('sequelize');
const DB = require('../database/initDatabase');

class TvShowDetails extends Model {}

TvShowDetails.init({
        index: {
        type: DataTypes.BIGINT,
        allowNull: true,
        primaryKey: true,
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
        }
    },{
        sequelize: DB,
        modelName: "imdbTV",
        tableName: "imdbTV",
        timestamps: false,
    }
)

module.exports = TvShowDetails;