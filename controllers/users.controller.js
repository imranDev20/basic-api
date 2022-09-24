const users = require("../models/users.json");
const { readFile, writeFile } = require("fs").promises;

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

  const newUsers = [...users, user];

  const jsonData = JSON.stringify(newUsers);

  writeFile("./models/users.json", jsonData, (err) => {
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

// Deleting a user
module.exports.deleteUser = async (req, res, next) => {
  try {
    // Getting the ID from URL parameter
    let { id } = req.params;
    id = parseInt(id);

    const usersRaw = await readFile("./models/users.json");
    const users = JSON.parse(usersRaw);

    const isIncluded = users.map((user) => user.id).includes(id);

    if (isIncluded) {
      const filtered = users.filter((user) => user.id !== id);
      console.log(filtered);
      const jsonData = JSON.stringify(filtered);

      await writeFile("./models/users.json", jsonData, (err) => {
        if (err) {
          console.log(err);
        }
        console.log("Data written to json file");
      });

      const newUsersRaw = await readFile("./models/users.json");
      const newUsers = JSON.parse(newUsersRaw);
      res.status(200).json({ success: true, data: newUsers });
    } else {
      res.status(404).send("Not Found");
    }
  } catch (error) {
    console.log(error);
  }
};
