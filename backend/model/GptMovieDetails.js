const { Model, DataTypes } = require('sequelize');
const DB = require('../database/initDatabase');
const Top10Movie = require('./Top10TvShow')

class GptMovieDetails extends Model {}

GptMovieDetails.init({
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
        movie: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        userOpinion: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        similarMovies: {
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
        modelName: "gptMovie",
        tableName: "gptMovie",
        timestamps: false,
    }
)

module.exports = GptMovieDetails;