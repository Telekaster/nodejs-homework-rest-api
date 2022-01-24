const express = require("express");
const router = express.Router();
const { ctrlWrapper, validation } = require("../../middlewares");
const {
  getAll,
  getById,
  removeById,
  add,
  updateById,
  updateStatusContact,
} = require("../../controllers/contacts");
const { joiSchema, favoriteJoiSchema } = require("../../model/contact");

router.get("/", ctrlWrapper(getAll));
router.get("/:id", ctrlWrapper(getById));
router.delete("/:id", ctrlWrapper(removeById));
router.post("/", validation(joiSchema), ctrlWrapper(add));
router.put("/:id", validation(joiSchema), ctrlWrapper(updateById));
router.patch(
  "/:id/favorite",
  validation(favoriteJoiSchema),
  ctrlWrapper(updateStatusContact)
);

module.exports = router;
