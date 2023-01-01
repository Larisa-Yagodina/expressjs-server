import Order from './Model'

export default function getOrder(req, res) {
  Order
    .find()
    .exec()
    .then(result => {
      res.status(202).json(result);
    })
    .catch(err => {
      res.status(400).json("Orders get all error")
    })
    .finally(() => {
      console.log("Orders get all END");
    })
}