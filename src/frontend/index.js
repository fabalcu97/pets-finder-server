import { join } from 'path';
import { readdirSync } from 'fs';
import { static as statics } from 'express';


/**
 * Method that sets the static files to be served.
 * @param {Express} expressApp Server to consume statics
 */
function SetFrontend(expressApp) {
  expressApp.use('/', statics(join(__dirname, `application/build/`)));
}

export default SetFrontend;
