// middlewares/format.js (прослойка для форматирования и пересохранения)
// Jimp пакет для обработки изображений
const Jimp = require("jimp");
const { v4 } = require("uuid");
const { TEMP_DIR, FILE_DIR } = require("../service/avatarDir");
const fs = require("fs/promises");

const format = (req, res, next) => {
  const name = v4();
  Jimp.read(`${TEMP_DIR}/avatar.jpg`, (err, avatar) => {
    if (err) {
      throw err;
    }

    avatar.resize(250, 250).write(`${FILE_DIR}/${name}.jpg`);
  });
  req.user.avatarURL = `${FILE_DIR}\\${name}.jpg`;
  fs.unlink(`${TEMP_DIR}/avatar.jpg`);

  next();
};

module.exports = format;
