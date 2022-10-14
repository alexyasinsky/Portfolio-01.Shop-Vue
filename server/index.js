const express = require('express');
const fs = require('fs');
const writer = require('./utils/writer.js'); //() => true/false
const cart = require('./services/cart.js'); // cart.add() // cart.change() // cart.delete() // => ({cart})

const server = express();
server.use(express.json());



server.get('/catalog', (req, res) => {
  fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
      if (!err) {
          res.json(JSON.parse(data));
      }
  })
});

server.get('/single:id', (req, res) => {
  fs.readFile('./server/db/catalog.json', 'utf-8', (err, data) => {
      if (!err) {
        res.json(JSON.parse(data).find(item => item.id == req.params.id));
      }
  })
});

server.get('/cart', (req, res) => {
  fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
      if (!err) {
          res.json(JSON.parse(data));
      }
  })
});

server.post('/cart', (req, res) => {
  fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
      if (!err) {
          let newCart = cart.add(JSON.parse(data), req.body);
          writer('./server/db/cart.json', newCart)
              .then(status => {
                  if (status) {
                      res.json({ status });
                  } else {
                      res.sendStatus(500);
                  }
              })
      } else {
        console.log(err);
      }
  })
})

server.put('/cart/:id', (req, res) => {
  fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
      if (!err) {
          let newCart = cart.change(JSON.parse(data), req.params.id, req.body.amount);
          writer('./server/db/cart.json', newCart)
              .then(status => {
                  if (status) {
                      res.json({ status });
                  } else {
                      res.sendStatus(500);
                  }
              })
      } else {
        console.log(err);
      }
  })
})

server.delete('/cart/:id', (req, res) => {
  fs.readFile('./server/db/cart.json', 'utf-8', (err, data) => {
      if (!err) {
          let newCart = cart.delete(JSON.parse(data), req.params.id);
          writer('./server/db/cart.json', newCart)
              .then(status => {
                  if (status) {
                      res.json({ status });
                  } else {
                      res.sendStatus(500);
                  }
              })
      } else {
        console.log(err);
      }
  })
})

//когда проект полностью готов
// server.use('/', express.static('server/public'));


server.listen(3000, () => { console.log('SERVER AT PORT 3000...') });