const express = require('express');
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const path = require('path');

const app = express();

// It is also a middleware which yiels a next() function in the end and pass the pointer to the next middlewares
// It does the whole parsing by its own
// extended is if it should be able to parse non-default features
app.use(bodyParser.urlencoded({extended: false}));

// next is also a function, so basically app.use() which is also a function, is taking a function as an argument
// app.use((req, res, next)=>{
//     console.log('In the middleware');
//     next(); // Allows the request to continue to the next middleware in line
// });

// app.use('/', (req, res, next)=>{
//     // console.log('This always runs');
//     next();
// })

// Filtering Paths
app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000);

// app.listen() in expressJs do these two things for us, i.e. create the server and listen to it
// const server = http.createServer(app);
// server.listen(3000);