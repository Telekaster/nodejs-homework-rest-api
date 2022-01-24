const express = require("express");
const router = express.Router();
const { ctrlWrapper, validation } = require("../../middlewares");
const { joiRegisterSchema, joiLoginSchema } = require("../../model/user");
const auth = require("../../controllers/auth");

router.post(
  "/signup",
  validation(joiRegisterSchema),
  ctrlWrapper(auth.register)
);

router.post("/login", validation(joiLoginSchema), ctrlWrapper(auth.login));

module.exports = router;
