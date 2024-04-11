const { response } = require('express')
const res = require('express/lib/response')
const mailer = require('nodemailer')

const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

const oauth2Client = new OAuth2(
  process.env.GMAIL_CLIENTID,
  process.env.GMAIL_CLIENTSECRET,
  OAUTH_PLAYGROUND
);

oauth2Client.setCredentials({
  refresh_token: process.env.GMAIL_RFRESHTOKEN
});
const accessToken = oauth2Client.getAccessToken();

module.exports = (nome, email, mensagem)=>{
    const smtpTransport = mailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          type: 'OAuth2',
          user: process.env.GMAIL_ACC,
          clientId: process.env.GMAIL_CLIENTID,
          clientSecret: process.env.GMAIL_CLIENTSECRET,
          refreshToken: process.env.GMAIL_RFRESHTOKEN,
          accessToken: process.env.GMAIL_ACCESSTOKEN,
          accessToken, 
        }       
    })
    const mail = {
        from: 'sensorsync.ptg@gmail.com',
        to: `${email}`,
        subject: `Alerta ${nome}!`,
        text: `${mensagem}`,
    }


    return new Promise((resolve, reject)=>{
        smtpTransport.sendMail(mail)
            .then(response =>{
                smtpTransport.close()
                return resolve(response)
            })
            .catch(error =>{
                smtpTransport.close()
                return reject(error)
            })
    })
}
