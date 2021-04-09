import User from '../models/User.js';
import bcrypt from 'bcrypt';
import generateToken from '../services/auth.js';

const saltRounds = process.env.SALT_ROUNDS;

export default {
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

  async update(request, response) {
    const { oldPassword, newPassword, useremail } = request.body;
    const user = await User.findOne({
      where: {
        useremail,
      },
    });

    if (oldPassword && newPassword) {
      if (!(await bcrypt.compare(oldPassword, user.password))) {
        return response.status(400).json({ error: 'Senha Inválida!' });
      }

      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(newPassword, salt);

      const updatedPassword = await user.update({
        password: hashedPassword,
      });

      return response.status(204).json({ updatedPassword });
    }
    return response.status(200);
  },
};
