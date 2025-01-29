const Form = require("../models/Form");

// Create a new form
const createForm = async (req, res) => {
  const { formName, fields, status } = req.body;
  try {
    const newForm = new Form({ formName, fields, status });
    await newForm.save();
    res.status(201).json(newForm);
  } catch (err) {
    res.status(500).json({ message: "Error creating form", error: err.message });
  }
};

// Get all forms
const getAllForms = async (req, res) => {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ message: "Error fetching forms", error: err.message });
  }
};

// Get a form by ID
const getFormById = async (req, res) => {
  const { id } = req.params;
  try {
    const form = await Form.findById(id);
    if (!form) {
      return res.status(404).json({ message: "Form not found" });
    }
    res.status(200).json(form);
  } catch (err) {
    res.status(500).json({ message: "Error fetching form", error: err.message });
  }
};

// Update a form
const updateForm = async (req, res) => {
  const { id } = req.params;
  const { formName, fields } = req.body;
  try {
    const updatedForm = await Form.findByIdAndUpdate(
      id,
      { formName, fields },
      { new: true }
    );
    res.status(200).json(updatedForm);
  } catch (err) {
    res.status(500).json({ message: "Error updating form", error: err.message });
  }
};

// Delete a form
const deleteForm = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedForm = await Form.findByIdAndDelete(id);
    if (!deletedForm) {
      return res.status(404).json({ message: "Form not found" });
    }
    res.status(200).json({ message: "Form deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting form", error: err.message });
  }
};

module.exports = {
  createForm,
  getAllForms,
  getFormById,
  updateForm,
  deleteForm,
};
