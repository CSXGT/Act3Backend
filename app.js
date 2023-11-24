var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var indexRouter = require("./routes/index");
var patrocinantesRouter = require("./routes/patrocinantes");
var modalidadRouter = require("./routes/modalidad");
var equiposRouter = require("./routes/equipos");
var categoriaRouter = require("./routes/categoria");
var integrantesRouter = require("./routes/integrantes");

app.use("/", indexRouter);
app.use("/patrocinantes", patrocinantesRouter);
app.use("/modalidad", modalidadRouter);
app.use("/equipos", equiposRouter);
app.use("/categoria", categoriaRouter);
app.use("/integrantes", integrantesRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;