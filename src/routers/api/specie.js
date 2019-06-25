import { Router } from 'express';
import status from 'http-status-codes';

import { Specie } from "../../models";
import { errorHandling } from "../../services";

export const specieRouter = Router({
  caseSensitive: true,
});

specieRouter.post('/', (req, res, next) => {
  let data = req.body;
  Specie.create(data).then(specie => {
    res.status(status.CREATED).send(specie);
    next();
  }).catch(error => errorHandling(error, res, next));
});

specieRouter.get('/', (req, res, next) => {
  Specie.find({}).select('-__v').then(species => {
    res.status(status.OK).send(species);
    next();
  }).catch(error => errorHandling(error, res, next));
})

specieRouter.get('/:id/', (req, res, next) => {
  let id = req.params.id;
  Specie.findOne({ _id: id }).select('-__v').then(specie => {
    if (!specie) {
      res.status(status.NOT_FOUND).send(specie);
      next();
      return;
    }
    res.status(status.OK).send(specie);
    next();
  }).catch(error => errorHandling(error, res, next));
})
