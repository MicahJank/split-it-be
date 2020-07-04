const router = require('express').Router();

// any middleware here


// import all routers to use here


// use the routers and define their endpoints


// implement a basic get request when accessing the api
router.get('/', (req, res) => {
    res.send('<h1>API is up and running!</h1>')
})


module.exports = router;