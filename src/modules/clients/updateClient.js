import Client from './Model'
export default function updateClient(req, res) {

  const clientId = req.params.clientId;

  Client.findByIdAndUpdate(clientId, req.body)
    .exec()
    .then(result => {
      res.status(202).json('Client was updated')
    })
    .catch(err => {
      res.status(402).send('Client was  not updated')
    })
}