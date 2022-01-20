const { Contact } = require("../model/contact");

const getById = async (req, res) => {
  const data = await Contact.findOne({ _id: req.params.id });
  res.json({ status: "success", code: 200, data: { contact: data } });
};

module.exports = getById;
