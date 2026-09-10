import express from "express"
import { login,logout, getProfile } from "../../services/controller/auth.controller.js"

const router = express.Router()

router.post("/login", login)
router.get("/logout", logout)
router.get("/me", getProfile)

export default router