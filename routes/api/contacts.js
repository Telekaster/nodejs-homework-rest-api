const express = require("express");
const router = express.Router();
const { ctrlWrapper, validation } = require("../../middlewares");
const { getAll, getById, removeById, add } = require("../../controllers");
const { joiSchema } = require("../../model/contact");

router.get("/", ctrlWrapper(getAll));
router.get("/:id", ctrlWrapper(getById));
router.delete("/:id", ctrlWrapper(removeById));
router.post("/", validation(joiSchema), ctrlWrapper(add));

// router.get("/:contactId", async (req, res, next) => {
//   const { contactId } = req.params;
//   const result = await getById(contactId);

//   if (!result) {
//     res.status(404).json({
//       status: "error",
//       code: 404,
//       message: `Contact with id=${contactId} not found`,
//     });
//   }

//   res.status(200).json({
//     status: "success",
//     code: 200,
//     message: "get by ID",
//     data: result,
//   });
// });

// router.post("/", async (req, res, next) => {
//   try {
//     const body = await schema.validateAsync(req.body);
//     console.log("body", body);
//     const result = await addContact(body);

//     if (!result) {
//       res.status(400).json({
//         code: 400,
//         message: "missing required name field",
//       });
//     }
//     res.status(200).json({
//       status: "success",
//       code: 201,
//       message: "POST",
//       data: result,
//     });
//   } catch (error) {
//     res.status(400).json({
//       code: 400,
//       message: `${error}`,
//     });
//   }
// });

// router.delete("/:contactId", async (req, res, next) => {
//   const { contactId } = req.params;
//   const result = await removeContact(contactId);

//   if (!result) {
//     res.status(404).json({
//       status: "error",
//       code: 404,
//       message: `Contact with id=${contactId} not found`,
//     });
//   }

//   res.status(200).json({
//     status: "success",
//     code: 200,
//     message: "contact deleted",
//     data: result,
//   });
// });

// router.put("/:contactId", async (req, res, next) => {
//   const { contactId } = req.params;

//   try {
//     const body = await schema.validateAsync(req.body);
//     const result = await updateContact(contactId, body);

//     if (!result) {
//       res.status(400).json({ message: "missing fields" });
//     }

//     res.status(200).json({ status: "success", message: "PUT", data: result });
//   } catch (error) {
//     res.status(400).json({ message: `${error}` });
//   }
// });

module.exports = router;
