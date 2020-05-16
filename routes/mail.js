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
        api_key: 'empty rn',
        domain: 'empty rn'
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
