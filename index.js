
const express = require('express')
const cors = require("cors");
const app = express()
const port = 3000
const usersRoutes = require("./routes/v1/users.route")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.use("/user", usersRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app