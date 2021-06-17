// [your-sails-app]/config/email-without-ejs.js
module.exports['email-without-ejs'] = {
    service: 'smtp',
    transporter: {
        host: 'mail.ji-wit.com',
        port: 25,
        secure: false,
        tls: {
            rejectUnauthorized: false
        }
    },
    auth: { user: 'mike.ko@ji-wit.com', pass: 'Mike_Ko123' },
    testMode: false
};

