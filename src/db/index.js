const Sequelize = require('sequelize');
const databaseConfig = require('../config/database.js');
const User = require('../models/User.js');

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    try {
      this.connection = new Sequelize(databaseConfig[process.env.NODE_ENV]);
      models.forEach(model => model.init(this.connection));
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = new Database();
