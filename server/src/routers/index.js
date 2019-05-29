import { BASE_URL, MAIL, POSTS } from '../constants';
import { mailRouter } from './api/mail';
import { postsRouter } from "./api/posts";

/**
 * Set routes in the server.
 * 
 * @param {ExpressServer} expressApp 
 * @param {*} databaseConnection 
 */
function SetRouters(expressApp, databaseConnection) {
  expressApp.use(`${BASE_URL}/${MAIL}`, mailRouter);
  expressApp.use(`${BASE_URL}/${POSTS}`, postsRouter);
};

export default SetRouters