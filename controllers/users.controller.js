const users = require("../models/users.json")

module.exports.getRandomUser = async (req, res, next) => {
  try{
    const index = Math.floor(Math.random() * 10)
    const randomUser = users[index]
    console.log(randomUser)
    res.status(200).json({success: true, data:randomUser})
  } catch{

  }
}

module.exports.getAllUsers = async (req, res, next) => {
  try{
    res.status(200).json({success: true, data: users})
  } catch{

  }
}

module.exports.saveRandomUser = async (req, res, next) => {
 
  try{
    res.status(200).json({success: true, data: users})
  } catch{

  }
}

module.exports.updateRandomUser = async (req, res, next) => {
  try{
    res.status(200).json({success: true, data: users})
  } catch{

  }
}

module.exports.updateUsers = async (req, res, next) => {
  try{
    res.status(200).json({success: true, data: users})
  } catch{

  }
}

module.exports.deleteUser = async (req, res, next) => {
  try{
    const { id } = req.params;
    res.status(200).json({ success: true, message: "Successfully deleted the tool" });
  } catch{

  }
}

