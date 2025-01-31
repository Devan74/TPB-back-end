const mongoose = require("mongoose");

const DocSubTypeSchema = new mongoose.Schema({
  SubTypeCode: String,
  DocSubType: String
});

const DocTypeSchema = new mongoose.Schema({
  DocTypeCode: {
    type: String,
    required: true,
    unique: true
  },
  DocType: {
    type: String,
    required: true
  },
  DocSubType: [DocSubTypeSchema]
}, {
  timestamps: true
});

const DocType = mongoose.model("DocType", DocTypeSchema);

module.exports = DocType;
