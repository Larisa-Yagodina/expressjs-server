export default function patchStatuses(req, res) {

  const answer = {status: 'Status updated!',}
  res.status(201).json(answer);
}