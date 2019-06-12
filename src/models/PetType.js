import BaseSchema from "./BaseSchema";
import { connection } from "../database";

let petTypeSchema = BaseSchema({
  name: {
    type: String,
    required: true,
  },
}, {});

export let PetType = connection.model('PetType', petTypeSchema);