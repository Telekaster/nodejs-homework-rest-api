const { Contact } = require("../../model/contact");

const add = async (req, res) => {
  const data = await Contact.create(req.body);

  res.json({ status: "success", code: 201, data: { newContact: data } });
};

module.exports = add;
