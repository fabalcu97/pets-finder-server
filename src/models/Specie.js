import BaseSchema from "./BaseSchema";
import { connection } from "../database";

let specieSchema = BaseSchema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
}, {});

export let Specie = connection.model('Specie', specieSchema);