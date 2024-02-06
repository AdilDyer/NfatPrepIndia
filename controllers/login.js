const wrapAsync = require("../utils/wrapAsync");
const User = require("../models/user");

module.exports.login = (req, res, next) => {
  res.render("users/login.ejs");
};

module.exports.authenticate = wrapAsync(async (req, res) => {
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
