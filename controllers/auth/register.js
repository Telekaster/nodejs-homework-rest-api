const bcrypt = require("bcrypt");
const { User } = require("../../model/user");
const { Conflict } = require("http-errors");
// Пакет для генерации аватара
const gravatar = require("gravatar");

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  // генерация аватара
  const defaultAvatar = gravatar.url(email, {}, false);
  await User.create({
    email,
    password: hashPassword,
    avatarURL: defaultAvatar,
  });

  res.status(201).json({ status: "success", code: 201, data: { user: email } });
};

module.exports = register;
