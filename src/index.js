import '@babel/polyfill';

import express from "express";
import settings from "./settings";
import { connection } from "./database";
// import setFrontend from './frontend';
import setRouters from './routers';
import setMiddlewares from "./middlewares";

const app = express();

connection.once('open', function () {
  console.log(`Connected to mongo database!`)

  // Server setup
  setMiddlewares(app);
  setRouters(app);
  // setFrontend(app);

  app.listen(settings.port, () => {
    console.log(`Running on http://${settings.host}:${settings.port}`);
  });
})