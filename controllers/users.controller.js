const users = require("../models/users.json")

module.exports.getAllUsers = async (req, res, next) => {
  try{
    res.status(200).json({success: true, data: users})
  } catch{

  }
}