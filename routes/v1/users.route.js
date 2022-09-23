const express = require("express");
const usersControllers = require("../../controllers/users.controller");

const router = express.Router();

router.route("/random").get(usersControllers.getRandomUser);
router.route("/all").get(usersControllers.getAllUsers);
router.route("/save").post(usersControllers.saveRandomUser);
router.route("/update").patch(usersControllers.updateRandomUser);
router.route("/bulk-update").patch(usersControllers.updateUsers);
router.route("/delete/:id").delete(usersControllers.deleteUser);

module.exports = router;
