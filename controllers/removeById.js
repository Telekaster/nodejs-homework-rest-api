const { Contact } = require("../model/contact");

const removeById = async (req, res) => {
  const data = await Contact.findByIdAndRemove(req.params.id);
  res.json({ status: "success", code: 204, data: { removedContact: data } });
};

module.exports = removeById;
