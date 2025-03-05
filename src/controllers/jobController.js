const Job = require("../models/jobModel");

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json({
            status: "Success",
            results: jobs.length,
            data: jobs,
        });
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message,
        });
    }
};

exports.getJob = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        res.status(200).json({
            status: "Success",
            data: { job },
        });
    } catch (error) {
        res.status(404).json({
            status: "Failed",
            message: error.message,
        });
    }
};

exports.getAllHoursWorked = async (req, res) => {
    try {
        let results = await Job.find(
            { employee_name: req.params.darbuotojas },
            { hours_worked: 1, _id: 0 } // Return only hours worked fields
        );
        const total_hours_worked = results.reduce(
            (acc, curr) => acc + curr.hours_worked,
            0
        );
        res.status(200).json({
            status: "success",
            total_hours_worked,
        });
    } catch (error) {
        res.status(404).json({
            status: "failed",
            message: error.message,
        });
    }
};

exports.createJob = async (req, res) => {
    try {
        const newJob = await Job.create(req.body);
        res.status(201).json({
            status: "success",
            data: newJob,
        });
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: error.message,
        });
    }
};
