import Client from './Model'

export default function postClient(req, res) {

  const newClient = new Client({
    name:  req.body.name,
    address: req.body.address,
    phoneNumber:   req.body.phoneNumber,
    createAt: req.body.createAt,
  })
  newClient
    .save()
    .then(responce => {
      res.status(202).json(`Client ${req.body.name} is created`);
    })
    .catch(err => {
      res.status(402).json(`Client was not created`);
    })
    .finally(() => {
      console.log("END");
    })
}