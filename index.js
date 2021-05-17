var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer();
var database = require("./db");
var cors = require('cors');
var app = express();
app.use(express.json());
app.use(cors())

const publicationsRouter = require("./routes/publications");
app.use("/publications", publicationsRouter);

const eventsRouter = require("./routes/events");
app.use("/events",eventsRouter)

const facultyRouter = require("./routes/faculty");
app.use("/faculty", facultyRouter);

app.listen(4000, () => console.log("server started on port 4000"));
