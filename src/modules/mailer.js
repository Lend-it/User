import path from 'path';
import nodemailer from 'nodemailer';
import hbs from 'nodemailer-express-handlebars';

import mailTrapConfig from '../config/mail.js';

const transport = nodemailer.createTransport({
  ...mailTrapConfig,
});

transport.use(
  'compile',
  hbs({
    viewEngine: 'handlebars',
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',
  })
);

export default transport;
