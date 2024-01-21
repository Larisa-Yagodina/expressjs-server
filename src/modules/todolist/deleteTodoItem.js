import TodoList from './Model';

export default function deleteTodoItem(req, res) {

  const itemId = req.params.itemId;

  TodoList.deleteOne({_id: itemId})
    .exec()
    .then(result => {
      res.status(202).json( 'Task was deleted' );
    })
    .catch(err => {
      console.log(err);
      res.status(402).send('Task was not deleted');
    });

}