import { Schema } from "mongoose";

let BaseSchema = (schema, options) => {
  return new Schema({
    ...schema,
    timestamp: {
      type: Number,
      default: Date.now,
    },
  }, options)
};

export default BaseSchema;