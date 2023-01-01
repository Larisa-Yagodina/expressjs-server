import Service from './Model'
export default function updateService(req, res) {

  const serviceId = req.params.serviceId;

  Service.findByIdAndUpdate(serviceId, req.body)
    .exec()
    .then(result => {
      res.status(202).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(402).send('Service was  not updated')
    })
}