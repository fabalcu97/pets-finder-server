import { Types } from "mongoose";

import BaseSchema from "./BaseSchema";
import { connection } from "../database";

let breedSchema = BaseSchema({
  name: {
    type: String,
    required: true,
    index: {
      unique: true,
    }
  },
  specie: {
    type: Types.ObjectId,
    required: true,
    ref: 'Specie',
  }
}, {});

export let Breed = connection.model('Breed', breedSchema);