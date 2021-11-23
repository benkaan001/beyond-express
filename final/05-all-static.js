const express = require('express');
const path = require('path');

const app = express();

//set up static and middleware
app.use(express.static('./public'))

// since the index.html too is a static asset, we are moving it to public folder
// app.get('/',(req,res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))

// })

app.all('*', (req,res) => {
    res.status(404).send('resource not found')
})


app.listen(5000, () =>{
    console.log('Server is listening on port 5000.....');
})

// static files are assets that the server does not have to change