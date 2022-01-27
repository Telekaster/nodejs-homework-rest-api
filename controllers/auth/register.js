const bcrypt = require("bcrypt");
const { User } = require("../../model/user");
const { Conflict } = require("http-errors");
// Пакет для генерации аватара
const gravatar = require("gravatar");
// для отправки почты
const transporter = require("../../service/email/nodeMailer");
const emailOptions = require("../../service/email/emailOptions");
const { v4 } = require("uuid");

const register = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user) {
    throw new Conflict("Email in use");
  }

  const confirmationLink = v4();

  transporter
    .sendMail(emailOptions(email, confirmationLink))
    .then((info) => console.log(info))
    .catch((err) => console.log(err));

  const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const defaultAvatar = gravatar.url(email, {}, false);
  await User.create({
    email,
    password: hashPassword,
    avatarURL: defaultAvatar,
    confirmationLink,
  });

  res.status(201).json({ status: "success", code: 201, data: { user: email } });
};

module.exports = register;
