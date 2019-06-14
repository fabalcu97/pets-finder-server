import { BASE_URL, MAIL, POSTS, ENGAGE, SPECIE, BREED } from '../constants';
import { mailRouter } from './api/mail';
import { postsRouter } from "./api/posts";
import { engageRouter } from "./api/engage";
import { specieRouter } from "./api/specie";
import { breedRouter } from "./api/breed";

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
  expressApp.use(`${BASE_URL}/${BREED}`, breedRouter);
};

export default SetRouters