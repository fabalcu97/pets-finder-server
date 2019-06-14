import { Router } from 'express';
import status from 'http-status-codes';

import { User } from "../../models";
import { getAuthToken } from "../../models/AuthToken";
import { errorHandling } from "../../services";

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
    user.comparePassword(password, async (err, granted) => {
      if (err) {
        errorHandling(err);
        next();
        return;
      }
      if (granted) {
        let authToken = await getAuthToken(user._id);
        res.status(status.OK).send({authToken});
      } else {
        res.status(status.UNAUTHORIZED).send({ error: "Wrong password." });
      }
      next();
    });
  }).catch(error => errorHandling(error, res, next));
});

userRouter.post('/register', (req, res, next) => {
  let data = req.body;
  User.create(data).then(async user => {
    let authToken = await getAuthToken(user._id);
    res.status(status.OK).send({authToken});
    next();
  }).catch(error => errorHandling(error, res, next));
})