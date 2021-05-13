import User from '../models/User.js';
import crypto from 'crypto';
import RecoverPassword from '../models/RecoverPassword.js';
import mailer from '../modules/mailer.js';

export default {
  async sendMailForgot(request, response) {
    const { useremail } = request.body;

    const user = await User.findOne({ where: { useremail } });

    if (!user) {
      return response.status(400).json({ error: 'Usuario não encontrado' });
    }

    const token = crypto.randomBytes(2).toString('hex');

    const expires_date = new Date();
    expires_date.setHours(expires_date.getHours() + 1);

    await RecoverPassword.create({
      useremail,
      token,
      expires: expires_date,
      created_at: new Date(),
    });

    await mailer.sendMail({
      subject: 'Recuperação de senha',
      from: 'suporte.lend.it@gmail.com',
      to: useremail,
      html: `<html>
      <strong>${token}</strong>
      este é seu token
      </html>
       `,
    });

    return response.status(201);
  },
};
