import express from "express";
import settings from "./settings";
import setMiddlewares from "./middlewares";
import setRouters from './routers';
import setFrontend from './frontend';
const app = express();

// Server setup
setMiddlewares(app);
setRouters(app);
setFrontend(app);

app.listen(settings.port, () => {
  console.log(`Running on http://${settings.host}:${settings.port}`);
});