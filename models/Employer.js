const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const EmployerSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  state: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = Employer = model("employer", EmployerSchema);
