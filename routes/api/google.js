const router = require("express").Router();
const googleController = require("../../controllers/googleController");

// match with "/api/google"
router.route("/")
    .get(googleController.findAll);

module.exports = router;