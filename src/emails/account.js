const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'alakkat.n@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
  })
}

const sendExitEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'alakkat.n@gmail.com',
    subject: `Sorry to see you go ${name}!`,
    text: 'Is there anything we could have done to have kept you?'
  })
}

module.exports = {
  sendWelcomeEmail,
  sendExitEmail
}