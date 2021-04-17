var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var database = require('./db');



var app = express();
app.use(express.json())

const publicationsRouter = require('./routes/publications')
app.use('/publications', publicationsRouter)

app.listen(3000, () => console.log('server started'))
