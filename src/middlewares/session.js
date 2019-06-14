import status from "http-status-codes";

import { AuthToken, User } from "../models";
import { errorHandling } from "../services";

/**
 * Set user based on auth token
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export function setUser(req, res, next) {
  if (/\/login|\/register/g.test(req.path)) {
    next();
    return;
  }
  let authToken = req.get('Authorization');
  if (!authToken) {
    res.status(status.FORBIDDEN).send({ error: "Missing authorization token." });
    return;
  }
  AuthToken.findOne({ token: authToken }).then(token => {
    User.findOne({ _id: token.user }).select('-__v').select('-timestamp').select('-password').then(user => {
      req.user = user;
      next();
    }).catch(err => errorHandling(err, res, next));
  }).catch(err => errorHandling(err, res, next));
}