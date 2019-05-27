import { join } from 'path';
import { readdirSync } from 'fs';
import { static as statics } from 'express';


/**
 * Method that sets the static files to be served.
 * @param {Express} expressApp Server to consume statics
 */
function SetFrontend(expressApp, dbConnection) {
  readdirSync(__dirname).forEach(dir => {
    expressApp.use('/', statics(join(__dirname, `${dir}/build/`)));
  });
}

export default SetFrontend