const { User } = require("../../model/user");

const confirmation = async (req, res) => {
  const { confirmationLink } = req.params;
  const user = await User.findOne({ confirmationLink });

  if (!user) {
    res.status(404).json({
      status: "error",
      code: 404,
      data: {
        message: "User not found",
      },
    });
  } else {
    await User.findOneAndUpdate(
      { confirmationLink },
      { confirmed: true, confirmationLink: null }
    );

    res.status(200).json({
      status: "success",
      code: 200,
      data: {
        message: "Verification successful",
      },
    });
  }
};

module.exports = confirmation;
