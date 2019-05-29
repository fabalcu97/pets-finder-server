import status from "http-status-codes";

export function errorParser(error) {
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