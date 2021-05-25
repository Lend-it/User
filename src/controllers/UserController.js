const User = require('../models/User.js');
const bcrypt = require('bcrypt');
const generateToken = require('../services/auth.js');
const { deleteFile } = require('../utils/file.js');
const path = require('path');

const saltRounds = process.env.SALT_ROUNDS;

module.exports = {
  async list(request, response) {
    const requestUsers = request.query.requestUsers;
    const usersIds = requestUsers.split(',');

    const users = await User.findAll({
      where: {
        useremail: usersIds,
      },
    });

    return response.status(200).json(users);
  },

  async show(request, response) {
    const useremail = request.params.useremail;

    const user = await User.findOne({
      where: {
        useremail,
      },
    });

    if (!user) {
      return response.status(400).json({ error: 'Usuário não existente' });
    }

    return response.status(200).json(user);
  },

  async create(request, response) {
    const {
      useremail,
      name,
      whatsappnumber,
      password,
      latitude,
      longitude,
    } = request.body;

    const salt = bcrypt.genSaltSync(saltRounds);

    const hashedPassword = bcrypt.hashSync(password, salt);

    try {
      const userExists = await User.findOne({
        where: {
          useremail,
        },
      });

      if (userExists) {
        return response.status(400).json({ error: 'Usuário já cadastrado' });
      }

      const user = await User.create({
        useremail,
        name,
        whatsappnumber,
        password: hashedPassword,
        latitude,
        longitude,
      });

      const token = generateToken({ useremail });

      return response.status(201).json({ user, token });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },
};
