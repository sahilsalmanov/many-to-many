const express = require("express");
const cors = require("cors");
const { db } = require("./config/db");
const { locationRoutes } = require("./routes/locationRoutes");
const MiddleTable = require("./models/MiddleTable");
const jobRoutes = require("./routes/jobRoutes");
const app = express();
require("dotenv").config();
const port = 8080;

db.connect();

app.use(express.json());
app.use(cors());

app.use("/api/locations", locationRoutes);
app.use("/api/jobs", jobRoutes);

app.post("/api/locationJob", async (req, res) => {
  try {
    const { jobId, locationId } = req.body;
    const newJobLoc = await MiddleTable.create({
      jobId,
      locationId,
    });
    res.status(201).json({
      status: "success ",
      data: newJobLoc
    });
  } catch (error) {
    res.status(400).json({
      status: "fail ",
      error,
    });
  }
});

app.get("/", async (req, res) => {
  res.send("OK!");
});

app.listen(port, () => {
  console.log("MongoDb connected");
});
