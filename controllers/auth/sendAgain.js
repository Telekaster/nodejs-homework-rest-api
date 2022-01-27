const { User } = require("../../model/user");
const transporter = require("../../service/email/nodeMailer");
const { v4 } = require("uuid");
const emailOptions = require("../../service/email/emailOptions");

const sendAgain = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: "missing required field email" });
  } else {
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "user not found" });
    } else if (user.confirmed) {
      res.status(400).json({ message: "Verification has already been passed" });
    } else {
      const confirmationLink = v4();

      transporter
        .sendMail(emailOptions(email, confirmationLink))
        .then((info) => console.log(info))
        .catch((err) => console.log(err));
    }
  }
};

module.exports = sendAgain;
