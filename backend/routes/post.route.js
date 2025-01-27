

import express from "express"
import { createpost, deletepost, getpost, getPosts } from "../controllers/post.controller.js"

const router = express.Router()
router.get("/",getPosts)
router.get("/:slug",getpost)
router.post("/",createpost)
router.delete("/:id",deletepost)


export default router