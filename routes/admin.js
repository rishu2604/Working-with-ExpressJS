const express = require('express');

// This router is like a mini express app tied to the other express app or pluggable into the other express apps
const router = express.Router();

const path = require('path');

const rootDir = require('../util/path');

// We can have same path for both the routes as both the routes uses different methods

router.get('/add-product', (req, res, next)=>{
    // console.log('In the middleware');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// app.use() fires or executes for both the post and get request
// so does the functions having use keywword, which is not needed
// to get rid of this, we can use app.get() and app.post() 
//app.get() is a filter for incoming get requests

// now this function will executes or triggers for only incoming post requests
router.post('/add-product', (req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
    // res.redirect is same as setting location header and status code
});

module.exports = router;