import { genSalt, hash, compare } from "bcrypt";

import BaseSchema from "./BaseSchema";
import { connection } from "../database";
import { SALT_FACTOR } from "../constants";

let userSchema = BaseSchema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  password: {
    type: String,
    required: true,
  }
}, {});

userSchema.path('sex').validate(v => v.length === 1 && /m|f/.test(v), "Must be either 'm' or 'f'.")
userSchema.path('email').validate(v => /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v), "Invalida value.");

/**
 * Password hashing
 */
userSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next();
  genSalt(SALT_FACTOR, (err, salt) => {
    if (err) return next(err);
    hash(this.password, salt, (err, hash) => {
      if (err) return next(err);
      this.password = hash;
      next();
    });
  });
});

/**
 * Password validation
 */
userSchema.methods.comparePassword = function (candidatePassword, cb) {
  compare(candidatePassword, this.password, (err, match) => {
    if (err) returncb(err);
    cb(null, match);
  });
};

export let User = connection.model('User', userSchema);