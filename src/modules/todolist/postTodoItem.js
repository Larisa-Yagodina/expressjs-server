import TodoList from './Model';

export default function postTodoItem(req, res) {

  const newTask = new TodoList({
    name: req.body.name,
    isDone: req.body.isDone,
  });
  newTask
    .save()
    .then(responce => {
      res.status(202).json(`Todo ${req.body.name} is created`);
    })
    .catch(err => {
      console.log(err);
      res.status(402).json('Todo was not created');
    })
    .finally(() => {
      console.log('END');
    });
}