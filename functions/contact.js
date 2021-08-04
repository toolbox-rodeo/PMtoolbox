{/*
const nodemailer = require("nodemailer");

exports.handler = async function contact(event) {
  const html = `<div style="margin: 20px auto;">${event.body}</div>`;
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "becomingdiga@gmail.com", // generated ethereal user
      pass: "LafaY3Tt3!", // generated ethereal password
    },
  });

  return new Promise((resolve, reject) => {
    transporter
      .sendMail({
        from: "becomingdiga@gmail.com",
        to: "hello@rank.health",
        subject: "New Form Submission",
        text: event.body,
        html,
      })
      .then((info) =>
        resolve({
          statusCode: 200,
          body: JSON.stringify({ data: info }),
        })
      )
      .catch((error) =>
        reject({
          statusCode: 400,
          body: JSON.stringify({
            data: error,
          }),
        })
      );
  });
};

*/}
