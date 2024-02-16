import Status from './Model';
export default function updateStatus(req, res) {

  const statusId = req.params.statusId;

  Status.findByIdAndUpdate(statusId, req.body)
    .exec()
    .then(result => {
      res.status(202).json('Status was updated');
    })
    .catch(err => {
      res.status(402).send('Status was  not updated');
    });
}
