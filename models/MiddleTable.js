const mongoose = require("mongoose");

const MiddleTableSchema = new mongoose.Schema({
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  locationId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("MiddleTable", MiddleTableSchema);
