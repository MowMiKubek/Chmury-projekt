import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import database from './app/database/db.js'
import authRoute from './app/routes/authRoute.js'
import userRoute from './app/routes/userRoute.js'
import wcaRoute from './app/routes/wcaRoute.js'
import registerRoute from './app/routes/registerRoute.js'
import tokenVerification from './app/middleware/tokenVerification.js'

const config = dotenv.config().parsed
const PORT = config.PORT || 8080
const app = express()

// middleware
app.use(express.json())
app.use(cors())

// routes
app.use("/api/users", registerRoute);
app.use('/api/users', tokenVerification, userRoute)
app.use('/api/auth', authRoute)
app.use('/api/wca', wcaRoute)

// database
database()

app.listen(PORT, () => {
    console.log(`Backend serwer listeninig on port ${PORT}`)
})
