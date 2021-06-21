{/* require('dotenv').config()

export default function (req, res) {

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'becomingdiga@gmail.com',
      pass: password.env.password,
    },
    secure: true,
  });

  const mailData = {
      from: 'becomingdiga@gmail.com',
      to: 'hello@rank.health',
      subject: `Message From ${req.body.email}`,
      text: req.body.text,
      html: <div>{req.body.text}</div>
     }

    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
      else
        console.log(info)
  })

  res.status(200)
}
*/}
