import Service from './Model'

export default function postService(req, res) {

  const newService = new Service({
    job:  req.body.job,
    price: req.body.price,
    primeCost:   req.body.primeCost,
    employee: req.body.employee,
  })
  newService
    .save()
    .then(responce => {
      res.status(202).json(`Service ${req.body.job} is created`);
    })
    .catch(err => {
      console.log(err);
      res.status(402).json(`Service was not created`);
    })
    .finally(() => {
      console.log("END");
    })
}