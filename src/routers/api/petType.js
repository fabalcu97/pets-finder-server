import { Router } from 'express';
import status from 'http-status-codes';

import { PetType } from "../../models";
import { errorHandling } from "../errorParser";

export const petTypeRouter = Router({
  caseSensitive: true,
});

petTypeRouter.post('/', (req, res, next) => {
  let data = req.body;
  PetType.create(data).then(petType => {
    res.status(status.CREATED).send(petType);
    next();
  }).catch(error => errorHandling(error, res, next));
});

petTypeRouter.get('/', (req, res, next) => {
  PetType.find({}).select('-__v').then(petType => {
    res.status(status.OK).send(petType);
    next();
  }).catch(error => errorHandling(error, res, next));
})

petTypeRouter.get('/:id/', (req, res, next) => {
  let id = req.params.id;
  PetType.findOne({ _id: id }).select('-__v').then(petType => {
    if (!petType) {
      res.status(status.NOT_FOUND).send(petType);
      next();
      return;
    }
    res.status(status.OK).send(petType);
    next();
  }).catch(error => errorHandling(error, res, next));
})
