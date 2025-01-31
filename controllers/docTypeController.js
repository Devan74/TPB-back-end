const DocType = require("../models/DocType");

const getAllDocTypes = async (req, res) => {
  try {
    const docTypes = await DocType.find();
    res.json(docTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createDocType = async (req, res) => {
  const docType = new DocType(req.body);
  try {
    const newDocType = await docType.save();
    res.status(201).json(newDocType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateDocType = async (req, res) => {
  try {
    const updatedDocType = await DocType.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedDocType);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteDocType = async (req, res) => {
  try {
    await DocType.findByIdAndDelete(req.params.id);
    res.json({ message: "Document type deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
    getAllDocTypes,
    createDocType,
    updateDocType,
    deleteDocType,
  };
  