import TodoList from './Model'
export default function updateTodoItem(req, res) {

  const itemId = req.params.itemId;

  TodoList.findByIdAndUpdate(itemId, req.body)
    .exec()
    .then(result => {
      res.status(202).json('Todo Item was updated');
    })
    .catch(err => {
      console.log(err);
      res.status(402).send('Todo Item was not updated');
    });
}