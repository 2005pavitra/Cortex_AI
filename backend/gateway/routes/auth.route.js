import express from "express"
import { login } from "../../services/controller/auth.controller.js"

const router = express.Router()

router.post("/login", login)

export default router