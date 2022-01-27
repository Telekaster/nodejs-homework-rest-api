const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { bool } = require("joi");

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: { type: String },
    confirmationLink: { type: String, required: true },
    confirmed: { type: Boolean, default: false },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

const joiRegisterSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
});

module.exports = {
  User,
  joiRegisterSchema,
  joiLoginSchema,
};
