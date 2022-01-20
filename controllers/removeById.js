const { Contact } = require("../model/contact");
const { NotFound } = require("http-errors");

const removeById = async (req, res) => {
  const data = await Contact.findByIdAndRemove(req.params.id);

  if (!data) {
    throw new NotFound("Not found");
  }

  res.json({ status: "success", code: 204, data: { removedContact: data } });
};

module.exports = removeById;
