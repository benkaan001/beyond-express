
// we want to move our middleware function to a seperate file 

// we want to figure out a way to add this middleware to all get routes
// without manually typing it

const express = require('express');
const app = express();
const logger = require('./logger')
const authorize = require('./authorize')

// to do that we will use the app.use method
// app.use(logger);

// we can also pass a path to app.use so it is applied to all routes automatically
// app.use('/api',logger)

// to use multiple middleware functions, we need to place them into an array
// for more info, refere to the doc
// AGAIN THEY WILL BE EXECUTED IN ORDER ie first logger and then authorize functions
app.use([logger, authorize]);


/// ******* WE HAVE TO declare/invoke app.use before any routes*************
// it is because in express everything goes in order.


app.get('/', (req, res) => {
    res.send('Home')
  })
  app.get('/about', (req, res) => {
    res.send('About')
  })
  app.get('/api/products', (req, res) => {
    res.send('Products')
  })
  app.get('/api/items', (req, res) => {
    console.log(req.user)
    res.send('Items')
  })

  // localhost:5000/api/items will return unauthorized 
  // localhost:5000/api/items?user=john will return Items

app.listen(5000, () => {
    console.log('Server is listening on Port 5000......');
})














// const express = require('express')
// const app = express()
// const logger = require('./logger')
// const authorize = require('./authorize')
// //  req => middleware => res
// app.use([logger, authorize])
// // api/home/about/products
// app.get('/', (req, res) => {
//   res.send('Home')
// })
// app.get('/about', (req, res) => {
//   res.send('About')
// })
// app.get('/api/products', (req, res) => {
//   res.send('Products')
// })
// app.get('/api/items', (req, res) => {
//   console.log(req.user)
//   res.send('Items')
// })

// app.listen(5000, () => {
//   console.log('Server is listening on port 5000....')
// })
