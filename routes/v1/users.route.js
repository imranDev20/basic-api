const express = require("express");
const usersControllers = require("../../controllers/users.controller");

const router = express.Router();

router
  .route("/all")
  /**
   * @api {get} /user/all
   * @apiDescription get all the users
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(usersControllers.getAllUsers);



  module.exports = router;