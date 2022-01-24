const express = require("express");
const router = express.Router();
const { ctrlWrapper, validation, auth } = require("../../middlewares");
const {
  getAll,
  getById,
  removeById,
  add,
  updateById,
  updateStatusContact,
} = require("../../controllers/contacts");
const { joiSchema, favoriteJoiSchema } = require("../../model/contact");

router.get("/", auth, ctrlWrapper(getAll));
router.get("/:id", auth, ctrlWrapper(getById));
router.delete("/:id", auth, ctrlWrapper(removeById));
router.post("/", auth, validation(joiSchema), ctrlWrapper(add));
router.put("/:id", auth, validation(joiSchema), ctrlWrapper(updateById));
router.patch(
  "/:id/favorite",
  auth,
  validation(favoriteJoiSchema),
  ctrlWrapper(updateStatusContact)
);

module.exports = router;
