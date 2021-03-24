import User from '../models/User.js';
import bcrypt from 'bcrypt';

const saltRounds = process.env.SALT_ROUNDS;

export default {
  async create(request, response) {
    const { useremail, password } = request.body;

    try {
      const user = await User.findOne({
        where: {
          useremail,
        },
      });

      if (!user) {
        return response.status(404).json({ error: 'Usuário não cadastrado' });
      }

      if(!await bcrypt.compare(password, user.password)){
        return response.status(400).json({ error: 'Senha inválida' });
      }

      return response.status(201).json(user);
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },
};
