
// the only way you can access to any of the routes is if you pass the right query 
// identifying you as the user john http://localhost:5000/?user=john


const authorize = (req,res, next) => {
    const {user} = req.query;
    if(user === 'john'){
        req.user = {name: 'john', id:3}
        next()
    }else{
        res.status(401).send('unauthorized')
    }
}
module.exports = authorize;