'use strict';

const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();
const clothes = require('./clothes.js');
const food = require('./food.js');


const POSTGRES_URL = process.env.DATABASE_URL||"manal:0000@localhost:5432/database1";
let sequelizeOptions =  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  };

  let sequelize = new Sequelize(POSTGRES_URL, sequelizeOptions);


module.exports = {
    db: sequelize,
    Clothes: clothes(sequelize, DataTypes),
    Food: food(sequelize, DataTypes)
}