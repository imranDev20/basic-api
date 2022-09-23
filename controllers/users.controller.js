const users = require("../models/users.json");
const fs = require("fs");

module.exports.getRandomUser = async (req, res, next) => {
  const index = Math.floor(Math.random() * 10);
  const randomUser = users[index];
  console.log(randomUser);
  res.status(200).json({ success: true, data: randomUser });
};

module.exports.getAllUsers = async (req, res, next) => {
  res.status(200).json({ success: true, data: users });
};

module.exports.saveRandomUser = async (req, res, next) => {
  const body = req.body;
  const user = {
    ...body,
    id: users.length + 1,
  };

  const newUsers = [...users, user]

  const jsonData = JSON.stringify(newUsers);

  fs.writeFile("./models/users.json", jsonData, (err) => {
    if (err) throw err;
    console.log("Data written to json file");
  });
  res.status(200).json({ success: true, data: users });
};

module.exports.updateRandomUser = async (req, res, next) => {
  res.status(200).json({ success: true, data: users });
};

module.exports.updateUsers = async (req, res, next) => {
  res.status(200).json({ success: true, data: users });
};

module.exports.deleteUser = async (req, res, next) => {
  const { id } = req.params;
  const filtered = users.filter((user) => user.id !== parseInt(id));
  console.log(filtered);
  res.status(200).json({ success: true, data: filtered });
};
