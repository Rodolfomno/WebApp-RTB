"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var config =  {
    username: process.env.DB_USER || 'rodolfo',
    password: process.env.DB_PASS || 'rodolfo123',
    database: process.env.DB_NAME || 'RTB_DB',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 3306,
    dialect: 'mysql',
    dialectOptions: {
      timezone: 'Z',
    },
    logging: false,
};
module.exports = config;