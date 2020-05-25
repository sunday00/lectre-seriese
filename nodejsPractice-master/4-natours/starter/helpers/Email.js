const nodemailer = require('nodemailer');
const pug = require('pug');
const htmlToText = require('html-to-text');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = this.isDev ? process.env.EMAIL_FROM : process.env.PROD_EMAIL_FROM;
    this.isDev = process.env.NODE_ENV === 'development';
  }

  createTransporter = () => {
    if (!this.isDev) {
      return nodemailer.createTransport({
        service: process.env.PROD_MAIL_SERV,
        port: process.env.PROD_EMAIL_PORT,
        host: process.env.PROD_EMAIL_HOST,
        auth: {
          user: process.env.PROD_EMAIL_USER,
          pass: process.env.PROD_EMAIL_PASS
        }
      });
    }

    return nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  };

  send = async (subject, template) => {
    const html = pug.renderFile(`${__dirname}/../views/emails/${template}.pug`, {
      fistName: this.firstName,
      url: this.url,
      subject
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      html,
      text: htmlToText.fromString(html)
    };

    await this.createTransporter().sendMail(mailOptions);
  };
}
