const express = require("express");
const router = express.Router();
const {
  getMyFiles,
  uploadInputDataFile,
} = require("../controllers/go-enrich.controller");
const { runJob, getJobStatus } = require('../controllers/explorium.controller')

// GET http://localhost:8080/api/go-enrich/myfiles
router.get("/myfiles", getMyFiles);
router.post("/myfiles/upload", uploadInputDataFile);
router.post('/run-job/:recipeName', runJob)
router.get('/query-job/:jobId', getJobStatus)

module.exports = router;
