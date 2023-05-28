const { Model, DataTypes } = require('sequelize');
const DB = require('../database/initDatabase');
const Top10TvShow = require('./Top10TvShow')

class GptTvShowDetails extends Model {}

GptTvShowDetails.init({
        // id:{
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     allowNull: false,
        //     primaryKey: true,
        // },
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
        userOpinion: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        similarShows: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        typeOfViewer: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        rating: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        // fk_id: {
        //     type: DataTypes.INTEGER,
        //     references: {
        //       // This is a reference to another model
        //       model: Top10TvShow,
        //       // This is the column name of the referenced model
        //       key: 'id',
        //     }
        //   }
    },{
        sequelize: DB,
        modelName: "gptTV",
        tableName: "gptTV",
        timestamps: false,
    }
)

module.exports = GptTvShowDetails;