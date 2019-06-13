import { Types } from "mongoose";

import BaseSchema from "./BaseSchema";
import { connection } from "../database";

let petSchema = BaseSchema({
  name: {
    type: String,
    required: true,
  },
  image: String,
  age: {
    type: Number,
    required: true,
  },
  breed: {
    type: Types.ObjectId,
    required: true,
    ref: 'Breed',
  }
}, {});

export let Pet = connection.model('Pet', petSchema);