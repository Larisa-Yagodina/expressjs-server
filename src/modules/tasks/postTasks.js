import Task from './Model'

export default function postTasks(req, res) {

  const newTask = new Task({
    name:  req.body.name,
    description: req.body.description,
    status:   req.body.status,
    priority: req.body.priority,
  })
  newTask
    .save()
    .then(responce => {
      res.status(202).json(`Task ${req.body.name} is created`);
    })
    .catch(err => {
      console.log(err);
      res.status(402).json(`Task was not created`);
    })
    .finally(() => {
      console.log("END");
    })
}