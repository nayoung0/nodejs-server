const mongoose = require("mongoose")
const DB_URL = "mongodb://localhost:27017/link"

const connect = () => {
  const options = {
    useCreateIndex: true
  }

  mongoose
    .connect(DB_URL, options)
    .then(() => {
      console.log("connected")
    })
    .catch(err => {
      console.log("connect error")
      console.log(err)
    })
}

connect()

mongoose.connection.on("error", err => {
  console.log("connect error", { err })
})

mongoose.connection.on("disconnected", () => {
  setTimeout(connect, 5000)
})