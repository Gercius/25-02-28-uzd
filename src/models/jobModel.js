const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title field is required"],
        enum: {
            values: ["Programavimas", "Administracija", "Žmogiškieji ištekliai"],
        },
    },
    description: {
        type: String,
        required: [true, "Description field is required"],
    },
    employee_name: {
        type: String,
        required: [true, "Employee name field is required"],
    },
    hours_worked: {
        type: Number,
        required: [true, "Hours worked field is required"],
        min: [0, "Hours worked cannot be below 0"],
    },
});

const Job = mongoose.model("Job", jobSchema);
module.exports = Job;
