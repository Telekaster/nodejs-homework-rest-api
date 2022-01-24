const { User } = require("../../model/user");
const { Unauthorized } = require("http-errors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  console.log("user", user);
  if (!user) {
    throw new Unauthorized("Email or password is wrong");
  }

  const passCompare = bcrypt.compareSync(password, user.password);
  if (!passCompare) {
    throw new Unauthorized("Email or password is wrong");
  }

  const payload = { id: user._id };
  const token = jwt.sign(payload, SECRET_KEY);
  await User.findByIdAndUpdate(user._id, { token });

  res.json({ status: "success", code: 200, data: { token } });
};

module.exports = login;
