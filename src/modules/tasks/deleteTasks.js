import Task from './Model';

export default function deleteTasks(req, res) {

  const taskId = req.params.userId;

  Task.deleteOne({_id: taskId})
    .exec()
    .then(result => {
      res.status(202).json( 'Task was deleted' );
    })
    .catch(err => {
      console.log(err);
      res.status(402).send('Task was not deleted')
    })

}