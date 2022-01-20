const { Schema, model } = require("mongoose");
const Joi = require("joi");

const contactSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);
const Contact = model("contacts", contactSchema);

const joiSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  phone: Joi.string()
    .length(14)
    .pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net", "uk"] },
  }),
});

const favoriteJoiSchema = Joi.object({ favorite: Joi.bool().required() });

module.exports = { Contact, joiSchema, favoriteJoiSchema };
