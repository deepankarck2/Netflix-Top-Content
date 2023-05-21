const { Model, DataTypes } = require('sequelize');
const DB = require('../database/initDatabase');


class Top10TvShow extends Model {} 

Top10TvShow.init({
    index: {
        type: DataTypes.BIGINT,
        allowNull: true,
        primaryKey: true,
      },
      TV: {
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
    },{
        sequelize: DB,
        tableName: 'netflixTopTv10',
        modelName: 'netflixTopTv10',
        timestamps: false
    }
)

module.exports = Top10TvShow;