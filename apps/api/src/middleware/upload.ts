import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "temp/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Date.now());
  }
});

export const upload = multer({ storage: storage, limits: { fileSize: 5 * 1024 * 1024 } });