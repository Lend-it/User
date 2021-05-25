const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'suporte.lend.it@gmail.com',
    pass: 'maiacelta',
  },
  // requireTLS: true,
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = transport;
