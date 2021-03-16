import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import User from '../models/User.js';

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    try {
      this.connection = new Sequelize(databaseConfig.development);
      models
        .map(model => model.init(this.connection))
        .map(
          model => model.associate && model.associate(this.connection.models)
        );
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default new Database();
