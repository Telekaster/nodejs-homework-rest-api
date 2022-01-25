const express = require("express");
const router = express.Router();
const {
  ctrlWrapper,
  validation,
  auth,
  upload,
  format,
} = require("../../middlewares");
const { joiRegisterSchema, joiLoginSchema } = require("../../model/user");
const user = require("../../controllers/auth");

router.post(
  "/signup",
  validation(joiRegisterSchema),
  ctrlWrapper(user.register)
);
router.post("/login", validation(joiLoginSchema), ctrlWrapper(user.login));
router.get("/current", auth, ctrlWrapper(user.getCurrent));
router.get("/logout", auth, ctrlWrapper(user.logout));
router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  format,
  ctrlWrapper(user.setAvatar)
);

module.exports = router;
