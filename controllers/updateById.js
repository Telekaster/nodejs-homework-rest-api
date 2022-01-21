const { Contact } = require("../model/contact");
const { NotFound } = require("http-errors");

const updateById = async (req, res) => {
  const { id } = req.params;
  const data = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!data) {
    throw new NotFound("Not found");
  }

  res.json({ status: "success", code: 201, data: { updatedContact: data } });
};

module.exports = updateById;
