const { Contact } = require("../../model/contact");
const { NotFound } = require("http-errors");
const mongoose = require("mongoose");

const updateById = async (req, res) => {
  const { id } = req.params;
  const ownerId = req.user._id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("id is not valid");
  }

  const data = await Contact.findByIdAndUpdate(
    { _id: id, owner: ownerId },
    req.body,
    { new: true }
  );

  if (!data) {
    throw new NotFound("Not found");
  }

  res.json({ status: "success", code: 201, data: { updatedContact: data } });
};

module.exports = updateById;
