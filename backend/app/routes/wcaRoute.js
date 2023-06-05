import { Router } from 'express'
import axios from 'axios'

const app = Router()

app.get('/:wcaid', async (req, res) => {
    const {wcaid} = req.params;
    console.log(wcaid)
    try{
        const response = await axios.get(`https://www.worldcubeassociation.org/api/v0/persons/${wcaid}`)
        const data = await response.data
        res.json({person: data.person, personal_records: data.personal_records});
        // console.log(data)
    } catch (error) {
        console.log("An error occured");
        if(error.response) {
            // console.log(error.response.status)
            res.sendStatus(error.response.status)
        } else {
            res.sendStatus(500);
        }
    }
})

export default app;