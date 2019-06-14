import BaseSchema from "./BaseSchema";
import { connection } from "../database";

let postSchema = BaseSchema({
  title: {
    type: String,
    required: true,
  },
  image: String,
  type: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
}, {});

export let Post = connection.model('Post', postSchema);