export default function home(req, res) {
  res.status(202).json('It`s a home page! Also try /tasks, /statuses, /clients, /orders, /services or /todolist');
}
