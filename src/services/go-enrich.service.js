const { connectAndExecuteQuery } = require("../config/database");
const getMyFilesService = async (customer_id) => {
  if (!customer_id || customer_id == "") {
    return {
      message: "Customer ID not found",
      error: true,
      success: false,
      status: "Not Found",
      statusCode: 404,
    };
  }
  const query = `SELECT * FROM CUSTOMER_FILES WHERE customer_id = '${customer_id}'`;
  const result = await connectAndExecuteQuery(query);
  return result;
};
const getAvailableRecipeColumnsService = async (recipeId) => {
  const query = `SELECT r.*, p.*
  FROM EXPLORIUM_RECIPES r
  JOIN EXPLORIUM_RECIPE_INPUT_PARAMETER_COLUMNS p
  ON r.ID = p.RECIPE_ID
  WHERE p.RECIPE_ID = ${recipeId};`;
  const result = await connectAndExecuteQuery(query);
  return result;
};
const getAvailableRecipesService = async () => {
  const query = "SELECT * FROM EXPLORIUM_RECIPES";
  const result = await connectAndExecuteQuery(query);
  return result;
};
const createCustomerFile = async ({ customer_id, fileName }) => {
  if (!customer_id || customer_id == "") {
    return {
      message: "Customer ID not found",
      error: true,
      success: false,
      status: "Not Found",
      statusCode: 404,
    };
  }
  if (!fileName || fileName == "") {
    return {
      message: "File name not found",
      error: true,
      success: false,
      status: "Not Found",
      statusCode: 404,
    };
  }
  const query_to_create_customer_file = `INSERT INTO CUSTOMER_FILES (CUSTOMER_ID, FILE_NAME) VALUES ('${customer_id}','${fileName}');`;
  const getRecordBack = `SELECT max(ID) as ID from CUSTOMER_FILES AT(statement=>:1:);`;
  const result = await connectAndExecuteQuery(
    query_to_create_customer_file,
    getRecordBack
  );
  return result;
};

const createCustomerFileProcess = async ({
  customer_file_id,
  customer_id,
  recipe_name,
}) => {
  if (!customer_file_id) {
    return {
      message: "Customer file ID not found",
      error: true,
      success: false,
      status: "Not Found",
      statusCode: 404,
    };
  }
  if (!recipe_name) {
    return {
      message: "Recipe ID not found",
      error: true,
      success: false,
      status: "Not Found",
      statusCode: 404,
    };
  }
  const getRecipeIdQuery = `SELECT ID FROM EXPLORIUM_RECIPES WHERE NAME = '${recipe_name}'`;
  const getRecipeIdResult = await connectAndExecuteQuery(getRecipeIdQuery);
  try {
    if (getRecipeIdResult.error || !getRecipeIdResult.data[0].ID) {
      return {
        message: "Recipe ID not found",
        error: true,
        success: false,
        status: "Not Found",
        statusCode: 404,
      };
    }
  } catch (error) {
    log.error("error<<<<<<<", error);
    return {
      message: error.message,
      error: true,
      success: false,
      status: "Not Found",
      statusCode: 404,
    };
  }
  const query_to_create_customer_file_process = `INSERT INTO CUSTOMER_FILE_PROCESSES (CUSTOMER_ID, CUSTOMER_FILES_ID, RECIPE_ID) VALUES ('${customer_id}',${customer_file_id},${getRecipeIdResult.data[0].ID});`;
  const getRecordBack = `SELECT max(ID) as ID from CUSTOMER_FILE_PROCESSES AT(statement=>:1:);`;

  const result = await connectAndExecuteQuery(
    query_to_create_customer_file_process,
    getRecordBack
  );
  return result;
};

module.exports = {
  getMyFilesService,
  getAvailableRecipeColumnsService,
  getAvailableRecipesService,
  createCustomerFile,
  createCustomerFileProcess,
};
