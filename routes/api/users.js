const express = require("express");
const router = express.Router();
const { ctrlWrapper, validation } = require("../../middlewares");
const models = require("../../model");
const auth = require("../../controllers/auth");
console.log(auth);
console.log("joiRegisterSchema", models.User.joiRegisterSchema);
router.post(
  "/signup",
  validation(models.User.joiRegisterSchema),
  ctrlWrapper(auth.register)
);

module.exports = router;
