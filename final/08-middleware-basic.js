const express = require('express');
const app = express();

// req => middleware => res 

// we will create a function named logger and then stick this middleware function
//in between path and callback
//we need to make sure to pass the following three parameters in the logger function
//for the express to use logger as middleware

// UNLESS YOU ARE SENDING BACK THE RESPONSE AS IN res.send('here is the response')
// YOU MUST PASS IT ONTO THE NEXT MIDDLEWARE
const logger = (req,res,next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // res.send('here is the response')
    next()
    
}

app.get('/',logger, (req,res) => {
    // res.send('home');
    // const method = req.method;
    // const url = req.url;
    // const time = new Date().getFullYear();
    // console.log(method, url, time); //   GET / 2021
    res.send('home')
})

// after passing the middleware function logger, when the user hits the /about route
// we will get a console message ====> GET /about 2021 
app.get('/about', logger, (req,res) =>{
    res.send('about');
})

app.listen(5000,() => {

    console.log('Server is listening on port 5000.......');
})












// const express = require('express')
// const app = express()

// //  req => middleware => res

// const logger = (req, res, next) => {
//   const method = req.method
//   const url = req.url
//   const time = new Date().getFullYear()
//   console.log(method, url, time)
//   next()
// }

// app.get('/', logger, (req, res) => {
//   res.send('Home')
// })
// app.get('/about', logger, (req, res) => {
//   res.send('About')
// })

// app.listen(5000, () => {
//   console.log('Server is listening on port 5000....')
// })
