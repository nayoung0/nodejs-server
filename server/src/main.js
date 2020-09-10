import express from "express"
import bodyParser from "body-parser"
import morgan from "morgan"
import cors from "cors"
import "./config/db"

const { PORT } = process.env

const app = express()

import linkRouter from "./components/links/route"

app.use(cors())
app.use(morgan())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use("/links", linkRouter)

app.use(function(req, res) {
  res.status(404).send("PAGE NOT FOUND")
})

const port = PORT || 5000
app.listen(port, function() {
  console.log(`Server listen on port: ${port}`)
})

export default app
