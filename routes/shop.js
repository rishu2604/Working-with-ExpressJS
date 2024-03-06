const express = require('express');
const router = express.Router();
const path = require('path');

// get function also does the exact same matching with the url or the path specified
router.get('/', (req, res, next)=>{
    // console.log('In another middleware');
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});
// __dirname holds the actual path of this directory from the OS
// __dirname returns the path of the file in which it is used

// res.send() in expressJs by default sets the content type to text/html if not given 
// and sets to binary or json if a boolean or number is given

module.exports = router;