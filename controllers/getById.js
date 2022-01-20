const { Contact } = require("../model/contact");
const { NotFound } = require("http-errors");

const getById = async (req, res) => {
  const data = await Contact.findOne({ _id: req.params.id });

  if (!data) {
    throw new NotFound("Not found");
  }

  res.json({ status: "success", code: 200, data: { contact: data } });
};

module.exports = getById;
