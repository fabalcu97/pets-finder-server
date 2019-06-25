import { v4 } from "uuid";
import { Types } from "mongoose";

import BaseSchema from "./BaseSchema";
import { connection } from "../database";
import { EXPIRE_TIME } from "../constants";

let authTokenSchema = BaseSchema({
  token: {
    type: String,
    index: {
      unique: true,
    },
  },
  user: {
    type: Types.ObjectId,
    required: true,
    ref: 'User',
  },
  expire: {
    type: Date
  }
}, {});

authTokenSchema.pre('save', function (next) {
  this.token = v4().replace(/\-/g, '');
  next();
});

export let AuthToken = connection.model('AuthToken', authTokenSchema);

export function getAuthToken(userId) {
  return AuthToken.create({
    user: userId,
    expire: new Date(new Date().getTime() + EXPIRE_TIME),
  });
}