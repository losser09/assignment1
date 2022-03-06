const express = require('express');


const hostname = 'localhost';
const port = 3000;

const app = express();



const dishRouter = require('./dishRouter');
app.use('/dishes', dishRouter.router);
app.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});