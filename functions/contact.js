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
      user: .env.account, // generated ethereal user
      pass: .env.password, // generated ethereal password
    },
  });

  return new Promise((resolve, reject) => {
    transporter
      .sendMail({
        from: "the cloud",
        to: .env.uuser,
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
