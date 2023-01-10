const express = require("express");
const router = express.Router();
const {
  getMyFiles,
  uploadInputDataFile,
  getAvailableRecipes,
  getAvailableRecipeColumns,
  createCustomerFileController,
} = require("../controllers/go-enrich.controller");
const { runJob, getJobStatus } = require("../controllers/explorium.controller");

// GET http://localhost:8080/api/go-enrich/myfiles
router.get("/myfiles", getMyFiles);
router.get("/recipes", getAvailableRecipes);
router.get("/recipes/:recipeId/columns", getAvailableRecipeColumns);
router.post("/myfiles/upload", uploadInputDataFile);
router.post("/create_customer_files", createCustomerFileController);
router.post("/run-job/:recipeName", runJob);
router.get("/query-job/:jobId", getJobStatus);

module.exports = router;
