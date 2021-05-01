var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
var database = require("./db");

var app = express();
app.use(express.json());

const publicationsRouter = require("./routes/publications");
app.use("/publications", publicationsRouter);

const facultyRouter = require("./routes/faculty");
app.use("/faculty", facultyRouter);

app.listen(4000, () => console.log("server started"));
