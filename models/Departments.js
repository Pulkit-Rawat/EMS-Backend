const { Schema, model } = require("mongoose");

const departmentSchema = new Schema({
  dptName: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const Departments = model("departments", departmentSchema);

module.exports = Departments;
