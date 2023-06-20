var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bessem.zaizaa1@gmail.com',
    pass: 'qjbajxetmossakxg'
  }
});

var mailOptions = {
  from: 'bessem.zaizaa1@gmail.com',
  to: 'boudefahamza@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});