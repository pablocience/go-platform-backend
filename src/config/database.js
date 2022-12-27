const snowflake = require("snowflake-sdk");
let connection;
module.exports = {
  getConnection: function () {
    if (!connection) {
      connection = snowflake.createConnection({
        account: "hm48224.us-east-2.aws",
        username: "pablo_zarate",
        password: 'Pablo6734"',
        application: "test_lambda",
        database: "RESEARCH",
        schema: "ENRICH_TEST",
      });
    }
    return connection;
  },
};
