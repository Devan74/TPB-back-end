const express = require("express");
const router = express.Router();
const {
  getAllDocTypes,
  createDocType,
  updateDocType,
  deleteDocType,
} = require("../controllers/docTypeController");

router.get("/", getAllDocTypes);
router.post("/", createDocType);
router.put("/:id", updateDocType);
router.delete("/:id", deleteDocType);

module.exports = router;
