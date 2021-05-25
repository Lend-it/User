const Sequelize = require('sequelize');
const databaseConfig = require('../config/database.js');
const User = require('../models/User.js');
const RecoverPassword = require('../models/RecoverPassword.js');

const models = [User, RecoverPassword];

class Database {
  constructor(test) {
    this.init(test);
  }

  init(test) {
    try {
      this.connection = new Sequelize(
        databaseConfig[test ? 'test' : process.env.NODE_ENV]
      );
      models.forEach(model => model.init(this.connection));
    } catch (error) {
      console.log(error.message);
    }
  }
}

module.exports = Database;
