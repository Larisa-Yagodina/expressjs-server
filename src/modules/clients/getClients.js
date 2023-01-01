import Client from './Model'

export default function getClients(req, res) {
  Client
    .find()
    .exec()
    .then(result => {
      res.status(202).json(result);
    })
    .catch(err => {
      res.status(400).json("Clients get all error")
    })
    .finally(() => {
      console.log("Clients get all END");
    })
}