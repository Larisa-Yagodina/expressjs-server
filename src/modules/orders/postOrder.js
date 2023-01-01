import Order from './Model'

export default function postOrder(req, res) {

  const newOrder = new Order({
    orderNumber: req.body.orderNumber,
    clientName: req.body.clientName,
    service: {
      job: req.body.service.job,
      employee: req.body.service.employee,
      price: req.body.service.price,
      primeCost: req.body.service.primeCost,
      createAt: req.body.service.createAt,
    },
    sentToDo: {
      date: req.body.sentToDo.date,
      status: req.body.sentToDo.status
    },
    completed: {
      date: req.body.completed.date,
      status: req.body.completed.status
    },
    sayToClient: {
      date: req.body.sayToClient.date,
      status: req.body.sayToClient.status
    },
    clientReceived: {
      date: req.body.clientReceived.date,
      status: req.body.clientReceived.status
    },
    paid: {
      payment: req.body.paid.payment,
      debt: req.body.paid.debt,
      primeCost: req.body.paid.primeCost,
      date: req.body.paid.date,
      status: req.body.paid.status
    },
  })

  newOrder
    .save()
    .then(responce => {
      res.status(202).json(`Order #${req.body.orderNumber} for ${req.body.clientName} is created`);
    })
    .catch(err => {
      res.status(402).json(`Order was not created`);
    })
    .finally(() => {
      console.log("END");
    })
}