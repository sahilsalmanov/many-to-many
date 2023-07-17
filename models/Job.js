const { default: mongoose } = require("mongoose")

const JobSchema = mongoose.Schema({
  title: String,
  description: String,
  minSalary: Number,
  maxSalary: Number,
  summary: String,
  locations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Location" }]
})

const Job = mongoose.model("Job", JobSchema)

module.exports = {
  Job
}
