const nodemailer = require('nodemailer');

const enviarEmail = async (destinatario, assunto, corpo) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false,
        auth: {
            user: 'seu-email@example.com',
            pass: 'sua-senha'
        }
    });

    const mailOptions = {
        from: 'seu-email@example.com',
        to: destinatario,
        subject: assunto,
        text: corpo
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('E-mail enviado:', info.response);
        return true;
    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);
        return false;
    }
};

module.exports = enviarEmail;
