import express from "express"
import morgan from "morgan"
import dotenv from "dotenv"
import proxy from "express-http-proxy";
import cors from "cors"
import cookieParser from "cookie-parser";
import { authorised } from "./middleware/auth.middleware.js";
dotenv.config()

const app = express();
app.use(express.json())
app.use(cors({
    origin:process.env.FRONTEND_SERVER_URL,
    credentials:true
}))
app.use(cookieParser())
const PORT = process.env.PORT || 4000


app.get('/', (req, res) =>{
    res.json({message:"gateway route"})
})

//router

//Setup proxy routes using environment variables
// Example for Auth microservice
// Public route
app.use(
  '/api/v1/auth/login',
  proxy(process.env.AUTH_SERVICE_URL, {
    proxyReqPathResolver: () => '/login'
  })
)

// Protected routes
app.use(
    '/api/v1/auth',
    authorised,
    proxy(process.env.AUTH_SERVICE_URL)
);

app.use('/api/v1/chat',
    authorised,
    proxy(process.env.CHAT_SERVICE_URL)
)


app.listen(PORT, () =>{
    console.log(`Gateway server started at PORT ${PORT}`)
})