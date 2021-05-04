import Sequelize from 'sequelize';

class RecoverPassword extends Sequelize.Model {
  static init(connection) {
    super.init(
      {
        useremail: Sequelize.TEXT,
        token: Sequelize.TEXT,
        expires: Sequelize.DATE,
        created_at: Sequelize.DATE,
      }
    );
    return this;
  }
  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'usermail' })
  }
}

export default RecoverPassword;
