export default function cors (app){
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header({
      //'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH'
    });
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    );
    if (req.method === "OPTIONS"){
      res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET');
      return res.status(200).json({})
    }
    next();
  });
}

// 'Access-Control-Allow-Origin': '*',
//   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
//   'Content-Type': 'application/json',
//   'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'