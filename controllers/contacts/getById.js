const { Contact } = require("../../model/contact");
const { NotFound } = require("http-errors");
const mongoose = require("mongoose");

const getById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("id is not valid");
  }

  const data = await Contact.findOne({ _id: id });

  if (!data) {
    throw new NotFound("Not found");
  }

  res.json({ status: "success", code: 200, data: { contact: data } });
};

module.exports = getById;
