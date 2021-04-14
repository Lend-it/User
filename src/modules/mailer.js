import path from 'path';
import nodemailer from 'nodemailer';

import mailTrapConfig from '../config/mail.js';

const transport = nodemailer.createTransport({
  host: mailTrapConfig.host,
  port: mailTrapConfig.port,
  secure: false,
  auth: {
    user: mailTrapConfig.user,
    pass: mailTrapConfig.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default transport;
