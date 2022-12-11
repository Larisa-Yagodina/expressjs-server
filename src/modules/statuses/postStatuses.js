import Status from './Model';

export default function postStatuses(req, res) {
  const newStatus = new Status({
    title:  req.body.title,
    status:   req.body.status,
  })
  newStatus
    .save()
    .then(responce => {
      res.status(202).json(`Status ${req.body.title} is created`);
    })
    .catch(err => {
      console.log(err);
      res.status(402).json(`Status was not created`);
    })
    .finally(() => {
      console.log("Status END");
    })
}