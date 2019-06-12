import { BASE_URL, MAIL, POSTS, ENGAGE, SPECIE } from '../constants';
import { mailRouter } from './api/mail';
import { postsRouter } from "./api/posts";
import { engageRouter } from "./api/engage";
import { specieRouter } from "./api/specie";

/**
 * Set routes in the server.
 * 
 * @param {ExpressServer} expressApp 
 * @param {*} databaseConnection 
 */
function SetRouters(expressApp, databaseConnection) {
  expressApp.use(`${BASE_URL}/${MAIL}`, mailRouter);
  expressApp.use(`${BASE_URL}/${POSTS}`, postsRouter);
  expressApp.use(`${BASE_URL}/${ENGAGE}`, engageRouter);
  expressApp.use(`${BASE_URL}/${SPECIE}`, specieRouter);
};

export default SetRouters