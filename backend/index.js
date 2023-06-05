import express from 'express'
import dotenv from 'dotenv'
import axios from 'axios'
import cors from 'cors'

dotenv.config()
const { PORT } = process.env

const app = express()

// middleware 
app.use(express.json())
app.use(cors())
// basic route
app.get('/api/:wcaid', async (req, res) => {
    const {wcaid} = req.params;
    console.log(wcaid)
    try{
        const response = await axios.get(`https://www.worldcubeassociation.org/api/v0/persons/${wcaid}`)
        const data = await response.data
        res.json({person: data.person, personal_records: data.personal_records});
        // console.log(data)
    } catch (error) {
        console.log("An error uccured");
        if(error.response) {
            // console.log(error.response.status)
            res.sendStatus(error.response.status)
        } else {
            res.sendStatus(500);
        }
    }
})

app.listen(PORT, () => {
    console.log(`Application listens on port ${PORT}`)
})