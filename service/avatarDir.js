// service/avatarDir.js
const path = require("path");
const FILE_DIR = path.resolve("./public/avatars");
const TEMP_DIR = path.resolve("./tmp");

module.exports = { FILE_DIR, TEMP_DIR };
