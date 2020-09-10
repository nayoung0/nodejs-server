import express from "express"

const router = express.Router()
import { createLink } from "./controller"

router.get("/", (req, res) => {
  res.status(200).send("link server")
})

router.post("/", createLink)

export default router
