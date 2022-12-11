export default function deleteStatuses(req, res) {

  const answer = {status: 'Status deleted!',}
  res.status(201).json(answer);
}