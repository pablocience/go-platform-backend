const snowflake = require("snowflake-sdk");
require("dotenv").config();
let mainConnection;
const destroyConnection = (conn) => {
  // conn.destroy();
  return;
};
const connectionOptions = {
  account: process.env.SNOWFLAKE_ACCOUNT,
  username: process.env.SNOWFLAKE_USER,
  password: process.env.SNOWFLAKE_PASSWORD,
  application: process.env.SNOWFLAKE_APP,
  database: process.env.SNOWFLAKE_DATABASE,
  schema: process.env.SNOWFLAKE_DATABASE_SCHEMA,
};
const poolOptions = {
  max: 100,
  min: 0,
};
const getConnection = () => {
  if (!mainConnection) {
    mainConnection = snowflake.createPool(connectionOptions, poolOptions);
    // mainConnection = snowflake.createConnection(connectionOptions);
  }
  return mainConnection;
};
const connectAndExecuteQuery = async (query, getRecordBack) => {
  const connection = getConnection();
  // Execute a query here
  const getRows = new Promise((resolve, eject) => {
    connection.use(async function (conn) {
      conn.execute({
        sqlText: query,
        complete: async function (err, stmt, rows) {
          if (err) {
            destroyConnection(conn);
            console.error("Error executing statement: " + err.message);
            resolve({
              status: "Internal Server Error",
              error: true,
              success: false,
              statusCode: 500,
              message: err.message,
              data: err,
            });
          } else {
            if (query.includes("INSERT INTO") && getRecordBack) {
              const getRecordCreated = new Promise(
                (resolveInternal, ejectInternal) => {
                  const formatedGetRecordBack = getRecordBack.replace(
                    ":1:",
                    `'${stmt.getStatementId()}'`
                  );

                  conn.execute({
                    sqlText: formatedGetRecordBack,
                    complete: function (err, stmt, rows) {
                      if (err) {
                        resolveInternal({
                          status: "Internal Server Error",
                          error: true,
                          success: false,
                          statusCode: 500,
                          message: err.message,
                          data: err,
                        });
                      } else {
                        resolveInternal({
                          message: "Success",
                          error: false,
                          success: true,
                          status: "OK",
                          statusCode: 200,
                          data: rows[0],
                        });
                      }
                    },
                  });
                }
              );
              const recordCreated = await getRecordCreated;
              resolve({
                message: "Success",
                error: false,
                success: true,
                status: "OK",
                statusCode: 200,
                data: recordCreated,
              });
              destroyConnection(conn);
              return;
            }

            destroyConnection(conn);
            resolve({
              message: "Success",
              error: false,
              success: true,
              status: "OK",
              statusCode: 200,
              data: rows,
            });
          }
        },
      });
    });
  });
  return getRows;
};
module.exports = {
  connectAndExecuteQuery,
  getConnection,
  destroyConnection,
};
