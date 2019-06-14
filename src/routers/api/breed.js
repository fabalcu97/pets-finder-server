import { Router } from 'express';
import status from 'http-status-codes';

import { Breed } from "../../models";
import { errorHandling } from "../errorParser";

export const breedRouter = Router({
  caseSensitive: true,
});

breedRouter.post('/', (req, res, next) => {
  let data = req.body;
  Breed.create(data).then(post => {
    res.status(status.CREATED).send(post);
    next();
  }).catch(error => errorHandling(error, res, next));
});

breedRouter.get('/', (req, res, next) => {
  Breed.find(req.query).select('-__v').then(posts => {
    res.status(status.OK).send(posts);
    next();
  }).catch(error => errorHandling(error, res, next));
})

breedRouter.get('/:id/', (req, res, next) => {
  let id = req.params.id;
  Breed.findOne({ _id: id }).select('-__v').then(post => {
    if (!post) {
      res.status(status.NOT_FOUND).send(post);
      next();
      return;
    }
    res.status(status.OK).send(post);
    next();
  }).catch(error => errorHandling(error, res, next));
})
