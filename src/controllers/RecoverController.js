import User from '../models/User.js';
import crypto from 'crypto';
import mailer from '../modules/mailer.js';

export default {
  async forgotPassword(request, response) {
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

      mailer.sendMail(
        {
          to: useremail,
          from: 'matheus@email.com',
          template: 'auth/forgot_password',
          context: { token },
        },
        e => {
          if (e) {
            return response
              .status(400)
              .send({ error: 'cannot send forgot passoword email' });
          }
          return response.send();
        }
      );
    } catch (e) {
      response
        .status(400)
        .json({ error: 'erro na recuperação de senha, tente novamente' });
    }
  },

  async resetPassword(request, response) {
    const { useremail, token, password } = request.body;
    console.log(useremail, token, password);
    try {
      const user = await User.findOne({ where: { useremail } }).select(
        '+passowordresttoken passowordresetexpires'
      );
      console.log(user);
      if (!user) {
        return response.status(400).json({ error: 'usuario não encontrado' });
      }

      if (token !== user.passwordresettoken) {
        return response.status(400).json({ error: 'codigo invalido' });
      }
      const now = new Date();

      if (now > user.passwordresetexpires) {
        return response
          .status(400)
          .json({ error: 'codigo expirado faça um novo' });
      }
      user.password = password;
      await user.save();

      response.send();
    } catch (e) {
      response.status(400).send({ error: 'Cannot Reset Passord, try again' });
    }
  },
};
