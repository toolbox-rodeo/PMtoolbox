const nodemailer = require("nodemailer");

export default function async(req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "becomingdiga@gmail.com",
      pass: process.env.password,
    },
    secure: true,
  });

  console.log(req.body);
  console.log("@@@");
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
