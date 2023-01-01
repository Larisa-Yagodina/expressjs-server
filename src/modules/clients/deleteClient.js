import Client from './Model';

export default function deleteClient(req, res) {

  const clientId = req.params.clientId;

  Client.deleteOne({_id: clientId})
    .exec()
    .then(result => {
      res.status(202).json( 'Client was deleted' );
    })
    .catch(err => {
      res.status(402).send('Client was not deleted')
    })

}