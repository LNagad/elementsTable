const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");

const homeRoute = require("./routes/homeRoute");
const validatorHelper = require("./helpers/validatorHelper");

const app = express();

app.engine(
  "hbs",
  engine({
    helpers: {
      validator: validatorHelper.validator,
      validatorInverse: validatorHelper.validatorInverse
    },
  })
);
app.set("view engine", "hbs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoute);

app.use((req, res, next) => {
  res.status(404).render("404", { layout: false, title: "404 page" });
});

app.listen(3000);
