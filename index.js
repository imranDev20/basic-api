
const express = require('express')
const cors = require("cors");
const app = express()
const port = 3000
const usersRoutes = require("./routes/v1/users.route")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.use("/api/v1/user", usersRoutes)


app.all("*", (req, res) => {
  res.send("NO route found.");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
