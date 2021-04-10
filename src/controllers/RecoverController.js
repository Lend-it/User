import User from '../models/User.js';
import crypto from 'crypto';

export default {
  async forgotPassord(request, response) {
    const { useremail } = request.body;

    try {
      const user = await User.findOne({ where: { useremail } });

      if (!user) {
        return response.status(400).json({ error: 'usuario não encontrado' });
      }

      const token = crypto.randomBytes(2).toString('hex');

      const now = new Date();
      now.setHours(now.getHours() + 1);

      await user.update({
        passwordresettoken: token,
        passwordresetexpires: now,
      });

      return response.status(204).send('ok');
    } catch (e) {
      response
        .status(400)
        .json({ error: 'erro na recuperação de senha, tente novamente' });
    }
  },
};
