const Sequelize = require('sequelize');
const sign = require('jsonwebtoken');

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
  encodeToken() {
    const date = new Date();

    const token = sign(
      {
        exp: new Date(date).setMinutes(
          date.getHours() + process.env.TOKEN_EXPIRATION_HOURS
        ),
        iat: date.toISOString(),
        sub: this.useremail,
      },
      process.env.SECRET
    );

    return token;
  }
}

module.exports = User;
