import { Types } from "mongoose";

import BaseSchema from "./BaseSchema";
import { connection } from "../database";

let sessionIdSchema = BaseSchema({
  token: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  user: {
    type: Types.ObjectId,
    required: true,
    ref: 'User',
  },
}, {});

export let SessionId = connection.model('SessionId', sessionIdSchema);