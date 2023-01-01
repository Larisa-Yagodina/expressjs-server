import Service from './Model';

export default function deleteService(req, res) {

  const serviceId = req.params.serviceId;

  Service.deleteOne({_id: serviceId})
    .exec()
    .then(result => {
      res.status(202).json( 'Service was deleted' );
    })
    .catch(err => {
      console.log(err);
      res.status(402).send('Service was not deleted')
    })

}