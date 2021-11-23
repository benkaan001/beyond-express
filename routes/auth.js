const express = require('express');
const router = express.Router();


router.post('/', (req,res) => {
    const { name } = req.body;
    // const name = req.body.name;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    // console.log(req.body);
    res
    .status(401)
    .json({success: false, msg: 'Please provide credentials'})
})

module.exports = router;