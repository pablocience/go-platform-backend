const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const port = process.env.PORT;
const apiKeys = process.env.GO_API_KEY;
const goEnrichRouter = require("./src/routes/go-enrich.route");

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost"],
  })
);
// Configures the middleware to process CSV files
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// API KEYS
app.use((req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  const customer_id = req.headers["customer_id"];
  if (apiKey != apiKeys || !apiKey || !apiKeys) {
    return res.status(401).json({
      statusCode: 401,
      status: "Unauthorized",
      message: "Unauthorized",
    });
  }
  if (!customer_id) {
    return res.status(401).json({
      statusCode: 401,
      status: "Unauthorized",
      message: "Uknown customer",
    });
  }
  next();
});
app.get("/", (req, res) => {
  res.send("API IS RUNNING!");
});
app.get("/api", (req, res) => {
  res
    .status(200)
    .json({ statusCode: 200, status: "OK", message: "API IS RUNNING!" });
});
app.use("/api/go-enrich", goEnrichRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
