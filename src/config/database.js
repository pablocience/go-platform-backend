const snowflake = require("snowflake-sdk");
require("dotenv").config();
let mainConnection;
const destroyConnection = () => {
  mainConnection.destroy();
  mainConnection = null;
};
const getConnection = () => {
  if (!mainConnection) {
    mainConnection = snowflake.createConnection({
      account: process.env.SNOWFLAKE_ACCOUNT,
      username: process.env.SNOWFLAKE_USER,
      password: process.env.SNOWFLAKE_PASSWORD,
      application: process.env.SNOWFLAKE_APP,
      database: process.env.SNOWFLAKE_DATABASE,
      schema: process.env.SNOWFLAKE_DATABASE_SCHEMA,
    });
  }
  return mainConnection;
};
const connectAndExecuteQuery = async (query, callback) => {
  const connection = getConnection();
  // Execute a query here
  connection.connect(async function (err, conn) {
    if (err) {
      console.error("Unable to connect: " + err.message);
      destroyConnection();
    } else {
      console.log("Successfully connected as ID: " + conn.getId());
    }
  });
  connection.execute({
    sqlText: query,
    complete: function (err, stmt, rows) {
      if (err) {
        console.error("Error executing statement: " + err.message);
        callback(rows, {
          status: "Internal Server Error",
          statusCode: 500,
          message: err.message,
          data: err,
        });
      } else {
        console.log("Successfully executed statement.");
        console.log("Number of rows returned: " + rows.length);
        console.log("Closing connection");
        destroyConnection();
        callback(rows, {
          message: "Success",
          status: "OK",
          statusCode: 200,
          data: rows,
        });
      }
    },
  });
};
module.exports = {
  connectAndExecuteQuery,
  getConnection,
  destroyConnection,
};
