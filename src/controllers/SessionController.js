import User from '../models/User.js';
import bcrypt from 'bcrypt';
import generateToken from '../services/auth.js';

export default {
  async create(request, response) {
    const { useremail, password } = request.body;

    try {
      const user = await User.findOne({
        where: {
          useremail,
        },
      });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        return response.status(404).json({ error: 'Usuário/Senha inválidos' });
      }

      const token = generateToken({ useremail });

      return response.status(201).json({ token, user });
    } catch (error) {
      return response.status(500).json({ error: error.message });
    }
  },
};
