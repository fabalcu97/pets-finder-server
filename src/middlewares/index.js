import helmet from 'helmet';
import morgan from 'morgan';
import cors from "cors";
import { json, urlencoded } from "express";

import settings from '../settings';

/**
 * Method that allows setup all the middleware required by the server.
 * @param {Express} expressApp Server to consume middleware
 */
function SetMiddleware(expressApp, dbConnection) {
  expressApp.use(json());
  expressApp.use(urlencoded({ extended: true }));
  expressApp.use(helmet());
  expressApp.use(cors());
  expressApp.use(morgan(settings.dev ? 'dev' : 'combined'));
}

export default SetMiddleware;