// middlewares/upload.js
const multer = require("multer");
const { TEMP_DIR } = require("../service/avatarDir");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, TEMP_DIR);
  },
  filename: (req, file, cb) => {
    const [fileName, extention] = file.originalname.split(".");

    if (extention === "png" || extention === "jpg") {
      cb(null, `avatar.jpg`);
    } else {
      throw new Error("Wrong file type");
    }
  },
});

const upload = multer({ storage });

module.exports = upload;
