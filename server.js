import express from 'express'
import {config} from "dotenv";
import dbConnect from "./dbConnect.js";
import authRoutes from "./routes/auth.js";
import refreshTokenRoutes from "./routes/refreshToken.js";
import userRoutes from './routes/users.js'
import auth from "./middleware/auth.js";

const app = express()

config()
dbConnect()

app.use(express.json())

app.use('/api', authRoutes)
app.use('/api/refreshToken', refreshTokenRoutes)
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
