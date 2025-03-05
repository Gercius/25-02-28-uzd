const express = require("express");
const jobController = require("../controllers/jobController");

const router = express.Router();

// prettier-ignore
router.route("/")
.get(jobController.getAllJobs)
.post(jobController.createJob)

router.route("/:id").get(jobController.getJob);
router.route("/suma/:darbuotojas").get(jobController.getAllHoursWorked);

module.exports = router;
