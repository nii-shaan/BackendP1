import multer from "multer";
import path from "path";
import fs from "fs";

const tempDir = "./public/temp";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempDir);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, tempDir);
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

export const upload = multer({ storage: storage });
