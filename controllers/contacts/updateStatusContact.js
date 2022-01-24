const { Contact } = require("../../model/contact");
const { NotFound } = require("http-errors");
const { BadRequest } = require("http-errors");
const mongoose = require("mongoose");

const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new Error("id is not valid");
  }

  if (req.body.favorite === undefined) {
    throw new BadRequest("missing field favorite");
  }

  const data = await Contact.findByIdAndUpdate(
    id,
    { favorite },
    {
      new: true,
    }
  );

  if (!data) {
    throw new NotFound("Not found");
  }

  res.json({ status: "success", code: 200, data: { updatedContact: data } });
};

module.exports = updateStatusContact;
