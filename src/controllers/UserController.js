import User from '../models/User.js';
import bcrypt from 'bcrypt';

const saltRounds = process.env.SALT_ROUNDS;

export default {
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

      return response.status(201).json(user);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },
};
