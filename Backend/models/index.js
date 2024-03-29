const Sequelize = require("sequelize");

const dbConfig = require("../config/dbConfig.js");

const sequelize = new Sequelize(
                            dbConfig.DB, 
                            dbConfig.USER, 
                            dbConfig.PASSWORD,
                            {host: dbConfig.HOST,
                            dialect: dbConfig.dialect,
                            operaterAliases: false,
                                            
                            pool: {
                                max: dbConfig.pool.max,
                                min: dbConfig.pool.min,
                                acquire: dbConfig.pool.acquire,
                                idle: dbConfig.pool.idle
                            }}
                            );

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.accounts = require("../models/model.js")(sequelize, Sequelize);

module.exports = db;