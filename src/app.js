const express = require("express");
const jobRoutes = require("./routes/jobRoutes");

const app = express();
app.use(express.json());

app.use("/api/darbai", jobRoutes);

module.exports = { app };
