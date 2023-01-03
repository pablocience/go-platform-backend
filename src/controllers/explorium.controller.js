const { explorium_job_ids } = require('../utils/jobIds')
const axios = require('axios')

const runJob = async (req, res, next) => {
    let recipeToUse
    try {
        recipeToUse = determineJobFromPath(req.params.recipeName)
    } catch (error) {
        res.status(400).json({
            status: "Invalid recipe",
            message: error?.message || "Invalid, recipe not found",
            statusCode: 400,
        })
    }

    try {
        const jobExecution = await executeJobAPI(recipeToUse)
        res.status(200).json(jobExecution)
    } catch (error) {
        res.status(500).json({
            status: "Invalid job execution",
            message: error?.message || "Job failed",
            statusCode: 500,
        })
    }
}

const determineJobFromPath = (recipeName) => {
    const recipeToUse = explorium_job_ids[recipeName]
    if (!recipeToUse) {
        throw new Error('Invalid, recipe not found')
    }
    return recipeToUse
}

const executeJobAPI = async (recipePath) => {
    try {
        const { data } = await axios({
            url: `${process.env.EXPLORIUM_JOB_API}/jobs/${recipePath}/run`,
            method: 'POST',
            headers: {
                'API_KEY': process.env.EXPLORIUM_JOB_APIKEY
            }
        })
        return data
    } catch (error) {
        throw error
    }
}

const getJobStatus = async (req, res, next) => {
    try {
        const jobStatus = await queryJobStatus(req.params.jobId)
        res.status(200).json(jobStatus)
    } catch (error) {
        res.status(500).json({
            status: "Invalid job query execution",
            message: error?.message || "Job query failed",
            statusCode: 500,
        })
    }
}

const queryJobStatus = async (jobStatusId) => {
    try {
        const { data } = await axios({
            url: `${process.env.EXPLORIUM_JOB_API}/recipe_runs/${jobStatusId}`,
            method: 'GET',
            headers: {
                'API_KEY': process.env.EXPLORIUM_JOB_APIKEY
            }
        })
        return data
    } catch (error) {
        throw error
    }
}

module.exports = {
    runJob,
    getJobStatus
}