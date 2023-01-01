import Service from './Model'

export default function getServices(req, res) {
  Service
    .find()
    .exec()
    .then(result => {
      res.status(202).json(result);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json("Services get all error")
    })
    .finally(() => {
      console.log("Services get all END");
    })
}