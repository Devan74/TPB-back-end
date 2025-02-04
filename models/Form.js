const mongoose = require("mongoose");

const fieldSchema = new mongoose.Schema({
  type: String,
  properties: {
    label: String,
    name: String,
  },
  attributes: {
    type: Object,
  },
  options: [
    {
      label: String,
      value: String,
    },
  ],
  layout: {
    inline: Boolean,
  },
  validation: {
    required: Boolean,
    minLength: Number,
    maxLength: Number,
    min: Number,
    max: Number,
    pattern: String,
  },
});

const formSchema = new mongoose.Schema(
  {
    formName: String,
    fields: [fieldSchema],
    createdAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      required: true,
    },
    docType:{
      type: String,
      required: true,
    },
    subDocType:{
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;