// [{
//   name: "Fido",
//   age: "1",
//   image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCO_RxwUGHY-T5r6nO5MkVs5KQeTluFZBAJt4RFHvbcc4yazWP",
//   sex: "m",
// }, {
//   name: "Firulais",
//   age: "3",
//   image: "https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_1280.jpg",
//   sex: "m",
// }, {
//   name: "Blanca",
//   age: "5",
//   image: "http://cdn.directexpose.com/wp-content/uploads/2018/02/78c6a542-16.-afghan-hound-rare-dog-breeds-imgur.jpg",
//   sex: "f",
// }]

import { Router } from 'express';
import status from 'http-status-codes';

import { Pet } from "../../models";
import { errorHandling } from "../errorParser";

export const engageRouter = Router({
  caseSensitive: true,
});


engageRouter.get('/', (req, res, next) => {
  let breed = req.query.breed;
  Pet.find({breed}).select('-__v').then(pets => {
    res.status(status.OK).send(pets);
    next();
  }).catch(error => errorHandling(error, res, next));
})

