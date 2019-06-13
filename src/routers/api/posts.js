import { Router } from 'express';
import status from 'http-status-codes';

import { Post } from "../../models";
import { errorHandling } from "../errorParser";

export const postsRouter = Router({
  caseSensitive: true,
});

postsRouter.post('/', (req, res, next) => {
  let data = req.body;
  Post.create(data).then(post => {
    res.status(status.CREATED).send(post);
    next();
  }).catch(error => errorHandling(error, res, next));
});

postsRouter.get('/', (req, res, next) => {
  Post.find(req.query).select('-__v').then(posts => {
    res.status(status.OK).send(posts);
    next();
  }).catch(error => errorHandling(error, res, next));
})

postsRouter.get('/:id/', (req, res, next) => {
  let id = req.params.id;
  Post.findOne({ _id: id }).select('-__v').then(post => {
    if (!post) {
      res.status(status.NOT_FOUND).send(post);
      next();
      return;
    }
    res.status(status.OK).send(post);
    next();
  }).catch(error => errorHandling(error, res, next));
})
