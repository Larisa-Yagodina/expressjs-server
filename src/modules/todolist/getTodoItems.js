import TodoList from './Model'
export default function getTodoItems(req, res) {

  TodoList
    .find()
    .exec()
    .then(result => {
      res.status(202).json(result);
    })
    .catch(err => {
      res.status(400).json("Todo list get all error")
    })
    .finally(() => {
      console.log("Todo list get all END");
    });
}