import Sequelize from 'sequelize';

class User extends Sequelize.Model {
  static init(connection) {
    super.init(
      {
        useremail: {
          type: Sequelize.TEXT,
          primaryKey: true,
        },
        name: Sequelize.TEXT,
        whatsappnumber: Sequelize.TEXT,
        password: Sequelize.TEXT,
        latitude: Sequelize.DECIMAL,
        longitude: Sequelize.DECIMAL,
      },
      {
        sequelize: connection,
        modelName: 'user',
        freezeTableName: true,
        timestamps: false,
      }
    );
    return this;
  }
}

export default User;
