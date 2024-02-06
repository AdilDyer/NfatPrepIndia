const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/user");

module.exports.registerPage = (req, res) => {
  res.render("users/register.ejs");
};

module.exports.signup = wrapAsync(async (req, res) => {
  try {
    let { username, password } = req.body;

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});
