const { Contact } = require("../../model/contact");

const getAll = async (req, res) => {
  const { _id } = req.user;
  const data = await Contact.find({ owner: _id }).populate("owner", "id email");

  res.json({ status: "success", code: 200, data: { contacts: data } });
};

module.exports = getAll;
