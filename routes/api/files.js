const express = require("express");
const router = express.Router();
const path = require("path");
const FILE_DIR = path.resolve("./public");
console.log("FILE_DIR", FILE_DIR);

router.get("/download", express.static(FILE_DIR));

module.exports = router;
