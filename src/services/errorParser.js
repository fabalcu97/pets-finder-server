import status from "http-status-codes";

export function errorParser(error) {
  console.error(error)
  if (error['name'] === 'ValidationError') {
    let { errors } = error;
    let detail = Object.keys(errors).map(k => ({ [k]: errors[k].message }));
    return {
      code: status.BAD_REQUEST,
      message: detail,
    };
  }
  if (error['name'] === 'CastError') {
    return {
      code: status.BAD_REQUEST,
      message: [{ [error.path]: `Invalid value ${error.value}` }],
    };
  }
  if (error['code'] === 11000) {
    return {
      code: status.BAD_REQUEST,
      message: [{ duplicated_key: JSON.parse(error['errmsg'].match(/(["])(?:(?=(\\?))\2.)*?\1/)[0]) }],
    }
  }
  return {
    code: status.INTERNAL_SERVER_ERROR,
    message: error,
  };
}

export function errorHandling(error, res, next) {
  let { message, code } = errorParser(error);
  res.status(code).send(message);
  next();
}