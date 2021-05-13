import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import RecoverPassword from '../models/RecoverPassword.js';
import User from '../models/User.js';

const models = [User, RecoverPassword];

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

export default new Database();
