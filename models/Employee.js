const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  STNO: {
    type: String,
    required: true,
    unique: false,
  },
  Name: {
    type: String,
    required: true,
  },
  PersNO: {
    type: String,
    required: true,
  },
  Grade: {
    type: String,
    required: false,
  },
  Designation: {
    type: String,
    required: false,
  },
  DepName: {
    type: String,
    require: false,
  },
  Section: {
    type: String,
    required: false,
  },
  Mobile: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: false,
  },
  CGMName: {
    type: String,
    required: false,
  },
  CGMOfficialEmail: {
    type: String,
    required: false,
  },
  isAllocated : {
    type: Boolean,
    required: false,
    default: false
  },
  Batch : {
    type: String,
    required: false,
  }
});




module.exports = Employee = mongoose.model('employee', EmployeeSchema);
