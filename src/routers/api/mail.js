import { Router } from 'express';
import { OK, BAD_REQUEST } from 'http-status-codes';
import { createTransport } from "nodemailer";

import { settings } from "../../settings";

export const mailRouter = Router({
  caseSensitive: true,
});

function getTransporter() {
  return createTransport(settings.smtp);
}

mailRouter.post(`/contact-us`, async (req, res, next) => {
  let transporter = await getTransporter();
  transporter.sendMail({
    from: `Template`,
    to: "fballoncuadros@gmail.com",
    subject: "Pregunta de la sección contáctanos",
    text: `TEmplate text`,
  }).then(v => {
    res.status(OK).send();
  }).catch(e => {
    console.log(e)
    res.status(BAD_REQUEST).send(e);
  })

});
