const { Contact } = require("../../model/contact");

const add = async (req, res) => {
  const { _id } = req.user;
  const data = await Contact.create({ ...req.body, owner: _id });

  res.json({ status: "success", code: 201, data: { newContact: data } });
};

module.exports = add;
