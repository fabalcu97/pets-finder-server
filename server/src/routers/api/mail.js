import { Router } from 'express';
import { OK, BAD_REQUEST } from 'http-status-codes';
import { createTransport, createTestAccount } from "nodemailer";

import settings from "../../settings";
import { MAIL } from "../../constants";


const mailRouter = Router({
  caseSensitive: true,
});

function getMailConfiguration() {
  return {
    host: settings.smtp.host,
    port: settings.smtp.port,
    secure: settings.smtp.secure,
    auth: {
      user: settings.smtp.auth.user,
      pass: settings.smtp.auth.password,
    },
  }
}

function getTransporter() {
  return createTransport(getMailConfiguration());
}

mailRouter.post(`/${MAIL}/contact-us`, async (req, res, next) => {
  let transporter = await getTransporter();
  let form = req.body;
  transporter.sendMail({
    from: `${form.email}`,
    to: "contacto@codenmicole.com",
    subject: "Pregunta de la sección contáctanos",
    text: `${form.name}\n${form.email}\n\n${form.question}`,
  }).then(v => {
    res.status(OK).send();
  }).catch(e => {
    res.status(BAD_REQUEST).send(e);
  })

});

export default mailRouter;