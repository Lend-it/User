const Sequelize = require('sequelize');

class RecoverPassword extends Sequelize.Model {
  static init(connection) {
    super.init(
      {
        useremail: Sequelize.TEXT,
        token: {
          type: Sequelize.TEXT,
          primaryKey: true,
        },
        expires: Sequelize.DATE,
        created_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      },
      {
        sequelize: connection,
        freezeTableName: true,
        modelName: 'recover_password',
        timestamps: false,
      }
    );
    return this;
  }
}

module.exports = RecoverPassword;
