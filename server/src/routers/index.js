import { BASE_URL } from '../constants';
import mailRouter from './api/mail';
import sampleRouter from "./api/sample";

/**
 * Set routes in the server.
 * 
 * @param {ExpressServer} expressApp 
 * @param {*} databaseConnection 
 */
function SetRouters(expressApp, databaseConnection) {
  expressApp.use(`${BASE_URL}/`, mailRouter);
  expressApp.use(`${BASE_URL}/`, sampleRouter);
};

export default SetRouters