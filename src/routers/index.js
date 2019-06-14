import { BASE_URL, MAIL, POSTS, ENGAGE, SPECIE, USER } from '../constants';
import { mailRouter } from './api/mail';
import { postsRouter } from "./api/posts";
import { engageRouter } from "./api/engage";
import { specieRouter } from "./api/specie";
import { userRouter } from "./api/user";

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
  expressApp.use(`${BASE_URL}/${USER}`, userRouter);
};

export default SetRouters