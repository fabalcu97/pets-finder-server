import { Router } from 'express';
import status from 'http-status-codes';

import { User } from "../../models";
import { getSettionId } from "../../models/Session";
import { errorHandling } from "../errorParser";

export const userRouter = Router({
  caseSensitive: true,
});

userRouter.post('/login', (req, res, next) => {
  let { email, password } = req.body;
  User.findOne({ email }).then(user => {
    if (!user) {
      res.status(status.NOT_FOUND).send({ error: 'User not registered.' });
      next();
      return;
    }
    user.comparePassword(password, (err, granted) => {
      if (err) {
        errorHandling(err);
        next();
        return;
      }
      if (granted) {
        // TODO: Generate session ID and send it
        async let sessionId = getsessionId()
        res.cookie('sessionId', sessionId);
        res.status(status.OK).send();
      } else {
        res.status(status.UNAUTHORIZED).send({ error: "Wrong password." });
      }
      next();
    });
  }).catch(error => errorHandling(error, res, next));
});

userRouter.post('/register', (req, res, next) => {
  let data = req.body;
  User.create(data).then(user => {
    // TODO: Generate session ID and send it
    res.cookie('sessionId', sessionId);
    res.status(status.OK).send();
    next();
  }).catch(error => errorHandling(error, res, next));
})