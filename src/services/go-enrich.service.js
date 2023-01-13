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
  const query = `SELECT CF.ID AS FILE_ID, CF.FILE_NAME, CF.UPLOAD_DATE, 
  CFP.ID AS CUSTOMER_FILE_PROCESS_ID, CFP.STATUS, CFP.RECIPE_ID,
  CFPQ.POSITION as QUEUE_POSITION
  FROM CUSTOMER_FILES as CF
  INNER JOIN CUSTOMER_FILE_PROCESSES as CFP
  ON CF.CUSTOMER_ID = CFP.CUSTOMER_ID
  AND CF.ID = CFP.CUSTOMER_FILES_ID
  LEFT JOIN CUSTOMER_FILE_PROCESS_QUEUE as CFPQ
  ON CFP.ID = CFPQ.CUSTOMER_FILE_PROCESS_ID
  WHERE CF.CUSTOMER_ID='${customer_id}'
  ORDER BY CF.UPLOAD_DATE DESC;`;
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
    console.error("SERVER ERROR:>", error);
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

const getRecipeIdByRecipeName = async () => {
  const query = `SELECT ID FROM EXPLORIUM_RECIPES WHERE NAME = '${recipe_name}'`;
  const recipe_result = connectAndExecuteQuery(query);
  const { data } = recipe_result;
  console.log("getRecipeIdByRecipeName", data);
  return data;
};

const startToEnrichService = async ({
  customer_file_process_id,
  customer_id,
}) => {
  const checkQueue = `SELECT COUNT(*) AS QUEUE_COUNT
  FROM CUSTOMER_FILE_PROCESS_QUEUE
  INNER JOIN CUSTOMER_FILE_PROCESSES
  ON CUSTOMER_FILE_PROCESS_QUEUE.CUSTOMER_FILE_PROCESS_ID = CUSTOMER_FILE_PROCESSES.ID
  WHERE CUSTOMER_FILE_PROCESSES.RECIPE_ID = 1;`;
  const checkQueueResult = await connectAndExecuteQuery(checkQueue);
  console.log("checkQueueResult-service", checkQueueResult);
  const insertToQueue = `INSERT INTO CUSTOMER_FILE_PROCESS_QUEUE (CUSTOMER_FILE_PROCESS_ID, POSITION) VALUES (${customer_file_process_id}, '${2}');`;
  const insertToQueueResult = await connectAndExecuteQuery(insertToQueue);
  return { checkQueueResult, insertToQueueResult };

  const move_to_enrich_recipe = `INSERT INTO EPLORIUM_INPUT_RECIPE_1 (COMPANY_NAME, COMPANY_DOMAIN)
  SELECT UIR.COMPANY_NAME, UIR.COMPANY_DOMAIN
  FROM USER_INPUT_RECIPE_1 UIR
  INNER JOIN CUSTOMER_FILE_PROCESSES CFP
  ON UIR.CUSTOMER_FILES_ID = CFP.CUSTOMER_FILES_ID
  WHERE CFP.ID = ${customer_file_process_id} AND UIR.CUSTOMER_ID = '${customer_id}';`;
};

module.exports = {
  getMyFilesService,
  getAvailableRecipeColumnsService,
  getAvailableRecipesService,
  createCustomerFile,
  createCustomerFileProcess,
  getRecipeIdByRecipeName,
  startToEnrichService,
};
