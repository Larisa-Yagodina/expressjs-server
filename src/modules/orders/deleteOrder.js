import Order from './Model';

export default function deleteOrder(req, res) {

  const orderId = req.params.orderId;

  Order.deleteOne({_id: orderId})
    .exec()
    .then(result => {
      res.status(202).json('Order was deleted');
    })
    .catch(err => {
      res.status(402).send('Order was not deleted')
    })

}