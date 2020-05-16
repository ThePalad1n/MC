// ==============================================================================
// DEPENDENCIES
// ==============================================================================
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

// ==============================================================================
// NODEMAILER CONFIGURATION
// ==============================================================================
const auth = {
    auth:{
        api_key: '8575615d961c90152006cb9ffbc70835-3e51f8d2-42d9541d',
        domain: 'sandbox3432a9baadb84d858e92b789feff0bde.mailgun.org'
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));

// ==============================================================================
// SENDING MAIL
// ==============================================================================

const sendMail = (email, subject, text, cb) => {

    const mailOptions={
        from: email,
        to: 'm0dpack2point0@gmail.com',
        subject: subject,
        text: text
    };
    
    transporter.sendMail(mailOptions, function(err, data) {
        if (err) {
            cb(err, null);
        }
        else{
            cb(err, data);
        }
    });
}

module.exports = sendMail;
