const express = require("express");
const {
  createForm,
  getAllForms,
  getFormById,
  updateForm,
  deleteForm,
} = require("../controllers/formController");

const router = express.Router();

router.post("/", createForm);
router.get("/", getAllForms);
router.get("/:id", getFormById);
router.put("/:id", updateForm);
router.delete("/:id", deleteForm);
module.exports = router;
