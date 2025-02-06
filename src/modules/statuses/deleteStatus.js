import Status from './Model';

export default function deleteStatus(req, res) {

  const statusId = req.params.statusId;

  Status.deleteOne({_id: statusId})
    .exec()
    .then(result => {
      res.status(202).json( 'Status was deleted' );
    })
    .catch(err => {
      console.log(err);
      res.status(402).send('Status was not deleted');
    });

}
