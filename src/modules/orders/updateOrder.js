import Order from './Model'
export default function updateOrder(req, res) {

  const orderId = req.params.orderId;

  Order.findByIdAndUpdate(orderId, req.body)
    .exec()
    .then(result => {
      res.status(202).json('Order was updated')
    })
    .catch(err => {
      res.status(402).send('Order was  not updated')
    })
}