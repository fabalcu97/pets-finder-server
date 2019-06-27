import { join } from 'path';
import { readFileSync } from 'fs';
import { safeLoad } from 'js-yaml';

const settingsPath = join(__dirname, '..', 'environment.yml');
export const settings = safeLoad(readFileSync(settingsPath, 'utf-8'));

settings.host = settings.host ? settings.host : '0.0.0.0';
if (process.env.$PORT) {
  settings.port = process.env.$PORT
} else if (settings.port) {
  settings.port = settings.port
} else {
  settings.port = 8000
}
const {
  domain, port, user, password, name,
} = settings.database;
settings.databaseURI = `mongodb://${user}:${password}@${domain}:${port}/${name}`;

export default settings;