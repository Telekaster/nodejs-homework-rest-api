const { User } = require("../../model/user");

const setAvatar = async (req, res) => {
  const avatarArr = req.user.avatarURL.split("\\");
  const avatarPath =
    avatarArr[avatarArr.length - 2] + "/" + avatarArr[avatarArr.length - 1];

  const { _id } = req.user;

  const user = await User.findByIdAndUpdate(
    { _id },
    { avatarURL: avatarPath },
    { new: true }
  );

  res.status(200).json({
    status: "success",
    code: 201,
    data: { avatar: user.avatarURL },
  });
};

module.exports = setAvatar;
