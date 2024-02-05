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

//login page
app.get("/login", (req, res, next) => {
  res.render("login.ejs");
});

//register-details-page
app.get("/register", (req, res) => {
  res.render("register.ejs");
});

//registration of user in db

app.post("/register", async (req, res) => {
  try {
    let { username, password } = req.body;

    // Validate input (e.g., check for existing username, strong password policy)

    // Hash the password before saving it to the database

    // Save user to the database

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//login of user from db
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username });

    // Check if the user exists and verify the password
    if (user.username === username && user.password === password) {
      // Successful login
      res.status(200).send("Login successful");
    } else {
      // Invalid username or password
      res.status(401).send("Invalid username or password");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

app.use("/", indexRouter);
app.use("/courses", courseRouter);
