const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, "../.env") });
const { Sequelize } = require('sequelize');

const DB = new Sequelize(
    process.env.MYSQL_DATABASE, process.env.MYSQL_USERNAME,  process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect:'mysql'
});

module.exports = DB;
