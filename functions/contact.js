const nodemailer = require("nodemailer");

exports.handler = async function contact(event) {
  const html = `<div style="margin: 20px auto;">${event.body}</div>`;
  const testAccount = await nodemailer.createTestAccount();
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  return new Promise((resolve, reject) => {
    transporter
      .sendMail({
        from: '"☁️ The Cloud ☁️" <thecloud@example.com>',
        to: "paschalidi.chris@gmail.com",
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
