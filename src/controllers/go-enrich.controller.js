const { connectAndExecuteQuery, getConnection } = require("../config/database");
const csvParse = require("csv-parser");

// GET
const getMyFiles = async (req, res, next) => {
  const customer_id = req.headers.customer_id;
  console.log("Getting my files", customer_id);
  if (!customer_id) {
    res.status(404).json({
      message: "Customer ID not found",
      statusCode: 404,
      status: "Not Found",
    });
  }
  const query =
    "SELECT * FROM CUSTOMER_FILES WHERE customer_id = " + customer_id;
  console.log(query);
  connectAndExecuteQuery(query, (rows, responseData) => {
    res.status(responseData.statusCode).json({
      ...responseData,
    });
  });
};
// POST
const uploadInputDataFile = (req, res, next) => {
  // recipe_1, recipe_2, recipe_3, recipe_4, recipe_5, recipe_6
  const recipe = "recipe_3";
  // for testing, recive data from body [{'Company name':'google', 'company domain': 'google.com'}]
  
  let recipeInputTable = null;
  if (!recipe) {
    res.status(400).json({
      status: "Select recipe",
      message: "Recipe not found",
      statusCode: 400,
    });
  }
  switch (recipe) {
    case "recipe_1":
      recipeInputTable = "USER_RECIPE_1_INPUT";
      break;
    case "recipe_2":
      recipeInputTable = "USER_RECIPE_2_INPUT";
      break;
    case "recipe_3":
      recipeInputTable = "USER_INPUT_TEST";
      break;
    case "recipe_4":
      recipeInputTable = "USER_RECIPE_4_INPUT";
      break;
    case "recipe_5":
      recipeInputTable = "USER_RECIPE_5_INPUT";
      break;
    case "recipe_6":
      recipeInputTable = "USER_RECIPE_6_INPUT";
      break;
    default:
      recipeInputTable = null;
  }
  if (recipeInputTable == null) {
    res.status(400).json({
      status: "Invalid recipe",
      message: "Invalid, recipe not found",
      statusCode: 400,
    });
  }
  const data = [
    { Company_name: "google", Domain_name: "google.com" },
    { Company_name: "cience", Domain_name: "cience.com" },
  ];
  const values = data
    .map((row) => `('${row.Company_name}', '${row.Domain_name}')`)
    .join(",");
  const query = `INSERT INTO USER_INPUT_TEST (COMPANY_NAME, COMPANY_DOMAIN)
  SELECT t.Company_name, t.Company_domain
  FROM (
    VALUES
    ${values}
  ) t(Company_name, Company_domain);`;


  connectAndExecuteQuery(query, (rows) => {
    res.status(200).json({
      message: "Success",
      status: "OK",
      statusCode: 200,
      data: rows,
    });
  });
};

module.exports = {
  getMyFiles,
  uploadInputDataFile,
};
