const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../utils/validation");

exports.signup = async (req, res) => {
  const validation = registerValidation(req.body);
  try {
    if (validation["error"]) {
      res.send(validation["error"].details[0].message);
    }

    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send("Email already exists.");

    const usernameExist = await User.findOne({ username: req.body.username });
    if (usernameExist) return res.status(400).send("Username already exists");

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      username: req.body.username,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: hashedPassword,
    });

    const savedUser = await user.save();
    return res.status(201).send(savedUser);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

exports.login = async (req, res) => {
  const validation = loginValidation(req.body);
  try {
    if (validation["error"]) {
      res.send(validation["error"].details[0].message);
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("Email not found.");

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Invalid Password.");

    // create jwt token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
  } catch (error) {
    res.status(400).send(error);
  }
};


exports.getUsers = async (req, res) => {
  const users = await User.find()
  return res.send(users)
}