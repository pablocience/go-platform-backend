const { connectAndExecuteQuery } = require("../config/database");
const {
  getMyFilesService,
  getAvailableRecipeColumnsService,
  createCustomerFile,
  getAvailableRecipesService,
  createCustomerFileProcess,
} = require("../services/go-enrich.service");
const {
  validateUserInputRecipeTableByRecipeName,
} = require("../validations/userInputTableValidation");

// GET
const getMyFiles = async (req, res, next) => {
  const customer_id = req.headers.customer_id;
  let result = await getMyFilesService(customer_id);
  res.status(result.statusCode).json({
    ...result,
  });
  return;
};

// GET
const getAvailableRecipes = async (req, res, next) => {
  const result = await getAvailableRecipesService();
  res.status(result.statusCode).json({
    ...result,
  });
  return;
};

// GET
const getAvailableRecipeColumns = async (req, res, next) => {
  const recipeId = req.params.recipeId;
  const result = await getAvailableRecipeColumnsService(recipeId);
  res.status(result.statusCode).json({
    ...result,
  });
  return;
};

// POST
const uploadInputDataFile = async (req, res, next) => {
  // MUST HAVE CUSTOMER ID
  const customer_id = req.headers.customer_id;
  // recipe_1, recipe_2, recipe_3, recipe_4, recipe_5, recipe_6
  const recipe = req.body.recipeName;
  // just a file name
  const fileName = req.body.fileName;
  // for testing, recive data from body [{'Company name':'google', 'company domain': 'google.com'}]
  const data = req.body.data || [];
  // const data = [
  //   { Company_name: "google", Domain_name: "google.com" },
  //   { Company_name: "cience", Domain_name: "cience.com" },
  // ];

  // VALIDATIONS - start
  if (!data || data.length === 0) {
    res.status(400).json({
      status: "Bad Request ",
      message: "Invalid Data",
      statusCode: 400,
    });
    return;
  }
  if (!recipe || recipe === "") {
    res.status(400).json({
      status: "Select recipe",
      message: "Recipe not found",
      statusCode: 400,
    });
    return;
  }
  if (!fileName || fileName === "") {
    res.status(400).json({
      status: "Invalid file name",
      message: "Invalid, file name not found",
      statusCode: 400,
    });
    return;
  }
  // VALIDATIONS - end

  // VALIDATE RECIPE USER TABLE - start
  const recipeInputTable = validateUserInputRecipeTableByRecipeName(recipe);
  if (recipeInputTable == null) {
    res.status(400).json({
      status: "Invalid recipe",
      message: "Invalid, recipe not found",
      statusCode: 400,
    });
    return;
  }
  // VALIDATE RECIPE USER TABLE - end

  // CREATE customer_file - start
  const { data: customer_file_result } = await createCustomerFile({
    customer_id,
    fileName,
  });
  if (customer_file_result.error || !customer_file_result?.data?.ID) {
    res.status(500).json({
      status: "Internal Server Error",
      message: "Internal Server Error",
      statusCode: 500,
    });
    return;
  }
  // CREATE customer_file - end
  //CREATE customer_file_process - start
  const create_customer_file_process_result = await createCustomerFileProcess({
    customer_file_id: customer_file_result.data.ID,
    customer_id,
    recipe_name: recipe,
  });
  if (create_customer_file_process_result.error) {
    res.status(500).json({
      status: "Internal Server Error",
      message: "Internal Server Error",
      statusCode: 500,
    });
    return;
  }
  //CREATE customer_file_process - end

  //SAVE user_input_data
  const values = data
    .map(
      (row) =>
        `('${row.company_name}', '${row.domain_name}',${customer_file_result.data.ID},'${customer_id}')`
    )
    .join(",");
  const create_file_data_query = `INSERT INTO ${recipeInputTable} (COMPANY_NAME, COMPANY_DOMAIN, CUSTOMER_FILES_ID, CUSTOMER_ID)
    SELECT t.company_name, t.company_domain, t.customer_files_id, t.customer_id
    FROM (
      VALUES
      ${values}
    ) t(company_name, company_domain, customer_files_id, customer_id);`;
  const data_result = await connectAndExecuteQuery(create_file_data_query);
  if (data_result.error) {
    res.status(500).json({
      status: "Internal Server Error",
      message: "Internal Server Error",
      statusCode: 500,
    });
    return;
  }
  const dataToRespond = {
    customer_file_id: customer_file_result.data.ID,
    data_to_enrich: data_result.data[0]["number of rows inserted"],
    customer_file_process_id: create_customer_file_process_result.data.data.ID,
  };
  res.status(create_customer_file_process_result.statusCode).json({
    status: "Success",
    message: "Success",
    statusCode: 200,
    dataType: "aaa",
    data: dataToRespond,
  });
  return;
};
const createCustomerFileController = async (req, res, next) => {
  // CREATE customer_file - start
  const customer_id = req.headers.customer_id;
  const fileName = "hardCodedFileName_PROMISE.csv";
  const { data: customer_file_result } = await createCustomerFile({
    customer_id,
    fileName,
  });
  if (customer_file_result.error) {
    res.status(500).json({
      status: "Internal Server Error",
      message: "Internal Server Error",
      statusCode: 500,
    });
    return;
  }
  res.status(200).json({
    status: "Success",
    message: "Success",
    statusCode: 200,
    data: customer_file_result.data,
  });
};
module.exports = {
  getMyFiles,
  uploadInputDataFile,
  getAvailableRecipes,
  getAvailableRecipeColumns,
  createCustomerFileController,
};
