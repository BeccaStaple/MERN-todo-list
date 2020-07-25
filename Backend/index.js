const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const todoRoute = require("./Controller/todoController")

app.use(cors());

mongoose.connect("mongodb://localhost:27017/testingdb", {
    useNewUrlParser: "true",
})
mongoose.connection.on("error", err => {
    console.log("err", err)
})
mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected")
})
const PORT = 4494
app.listen(PORT, () => {
    console.log(`app is listening to PORT ${PORT}`)
})

app.use(bodyParser.json());
app.use("/todo", todoRoute)
module.exports = app;

