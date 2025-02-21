const express = require("express");
const router = express.Router();
const {
  getLocations,
  setLocation,
  deleteGoals,
} = require("../controllers/locationController");
const { secureRole } = require("../middleware/authMiddleware");

router.route("/").get(secureRole("admin"), getLocations);
router.route("/set").post(setLocation);
router.route("/:id").delete(secureRole("admin"), deleteGoals);

module.exports = router;
