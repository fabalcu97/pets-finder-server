import { Router } from 'express';
import status from 'http-status-codes';

import { Post } from "../../models";
import { errorHandling } from "../../services";

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
  const limit = 10;
  const page = req.query.page || 0;
  Post.find().skip(page * limit).limit(limit).select('-__v').exec().then(posts => {
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

// TODO: Review the filtering
postsRouter.get('/type/:type/', (req, res, next) => {
  let type = req.params.type;
  Post.findOne({ type: type }).select('-__v').then(post => {
    if (!post) {
      res.status(status.NOT_FOUND).send(post);
      next();
      return;
    }
    res.status(status.OK).send(post);
    next();
  }).catch(error => errorHandling(error, res, next));
})