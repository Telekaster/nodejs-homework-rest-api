const { Contact } = require("../../model/contact");
const { NotFound } = require("http-errors");
const mongoose = require("mongoose");

const removeById = async (req, res) => {
  const { id } = req.params;
  const ownerId = req.user._id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("id is not valid");
  }
  const data = await Contact.findByIdAndRemove({ _id: id, owner: ownerId });

  if (!data) {
    throw new NotFound("Not found");
  }

  res.json({ status: "success", code: 204, data: { removedContact: data } });
};

module.exports = removeById;
