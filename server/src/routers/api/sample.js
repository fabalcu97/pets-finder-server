import { Router } from 'express';
import { OK } from 'http-status-codes';

const sampleRouter = Router({
  caseSensitive: true,
});

sampleRouter.use('/', (req, res, next) => {
  res.status(OK).send("Hello world!");
});

export default sampleRouter;