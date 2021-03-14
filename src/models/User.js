import Sequelize from 'sequelize';

class User extends Sequelize.Model {
  static init(connection) {
    super.init(
      {
        useremail: Sequelize.TEXT,
        name: Sequelize.TEXT,
        whatsappnumber: Sequelize.TEXT,
        password: Sequelize.TEXT,
        latitude: Sequelize.DECIMAL,
        longitude: Sequelize.DECIMAL,
      },
      { sequelize: connection }
    );
    return this;
  }
}

export default User;
