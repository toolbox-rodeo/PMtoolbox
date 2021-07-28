const nodemailer = require("nodemailer");

exports.handler = function contact(req, res, callback) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "becomingdiga@gmail.com",
      pass: "LafaY3Tt3!",
    },
    secure: true,
  });

  console.log("@@@@@");
  console.log(req);

  transporter.sendMail(
    {
      from: "becomingdiga@gmail.com",
      to: "hello@rank.health",
      subject: `Message From ${req.body.name}`,
      text: req.body,
    },
    (error) => {
      if (error) {
        callback(error);
      } else {
        callback(null, {
          statusCode: 200,
          body: "Ok",
        });
      }
    }
  );
};
