import Task from './Model'
export default function updateTask(req, res) {

  const taskId = req.params.taskId;

  Task.findByIdAndUpdate(taskId, req.body)
    .exec()
    .then(result => {
      res.status(202).json('Task was updated')
    })
    .catch(err => {
      console.log(err);
      res.status(402).send('Task was  not updated')
    })
}