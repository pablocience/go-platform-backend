const express = require("express");
const router = express.Router();
const connectionModule = require("../config/database");

// GET http://localhost:8080/api/go-enrich/myfiles
router.get("/myfiles", async (req, res) => {
  console.log("Getting my files");
  const connection = connectionModule.getConnection();
  // Execute a query here
  const query = "SELECT * FROM CUSTOMER_FILES";
  connection.connect(function (err, conn) {
    if (err) {
      console.error("Unable to connect: " + err.message);
    } else {
      console.log("Successfully connected as ID: " + connection.getId());
    }
  });
  await connection.execute({
    sqlText: query,
    complete: function (err, stmt, rows) {
      if (err) {
        console.error("Error executing statement: " + err.message);
      } else {
        console.log("Successfully executed statement.");
        console.log("Number of rows returned: " + rows.length);
      }
    },
  });
  connection.destroy();
  res.send("Hello World!");
});

module.exports = router;
