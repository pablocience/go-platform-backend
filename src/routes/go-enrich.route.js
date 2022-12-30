const express = require("express");
const router = express.Router();
const {
  getMyFiles,
  uploadInputDataFile,
} = require("../controllers/go-enrich.controller");

// GET http://localhost:8080/api/go-enrich/myfiles
router.get("/myfiles", getMyFiles);
router.post("/myfiles/upload", uploadInputDataFile);

module.exports = router;
