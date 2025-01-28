
import express from "express"
import dotenv from "dotenv"

import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import authRouter from "./routes/auth.route.js"

import connectdb from "./database/db.js"

const app = express()
dotenv.config()

app.use(express.json())
app.use("/auth",authRouter)
app.use("/users",userRouter)
app.use("/posts",postRouter)
app.use("/comment",commentRouter)

app.use((error,req,res,next) => {
    res.status(error.status || 500)

    res.json({
        message: error.message || "something went wrong!",
        status: error.status,
        stack: error.stack,
    })
})

const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD
connectdb(USERNAME, PASSWORD)

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})