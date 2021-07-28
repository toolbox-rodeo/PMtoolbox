export default function (req, res) {
  require("dotenv").config();

  const PASSWORD = process.env.password;

  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "becomingdiga@gmail.com",
      pass: process.env.GMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: "becomingdiga@gmail.com",
    to: "hello@rank.health",
    subject: `Message From ${req.body.name}`,
    text: `${req.body.message} | Sent from: ${req.body.email}`,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send("success");
}
