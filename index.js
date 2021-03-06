const express = require('express');


const hostname = 'localhost';
const port = 3000;

const app = express();


var leaderRouter = require('./leaderRouter');
app.use('/leadership', leaderRouter.router);
const dishRouter = require('./dishRouter');
app.use('/dishes', dishRouter.router);
var promoRouter = require('./promoRouter');
app.use('/promotions', promoRouter.router);
app.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}/`);
});