const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const goEnrichRouter = require("./src/routes/go-enrich.route");

app.get("/", (req, res) => {
  res.send("API IS RUNNING!");
});
app.use("/api/go-enrich", goEnrichRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
