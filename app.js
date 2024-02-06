if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");
const Course = require("./models/course.js");
const User = require("./models/user.js");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const wrapAsync = require("./utils/wrapAsync.js");
const indexRouter = require("./routes/index.js");
const courseRouter = require("./routes/course.js");
const connectRouter = require("./routes/connectus.js");
const loginRouter = require("./routes/login.js");
const registerRouter = require("./routes/register.js");
const ExpressError = require("./utils/ExpressError.js");

app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

main()
  .then(() => {
    console.log("connection sucessfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/nfatprepindia");
}

app.listen(8080, () => {
  console.log("port is listening to port 8080 ..");
});

app.use("/connectus", connectRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use("/", indexRouter);
app.use("/courses", courseRouter);

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { err });
});
