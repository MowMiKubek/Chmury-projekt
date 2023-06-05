import mongoose from 'mongoose'
import dotenv from 'dotenv'

const dbURL = dotenv.config().parsed.DB_URL

export default () => {
    mongoose.connect(dbURL, {useNewUrlParser: true})
    .then((result) => {
        console.log("Połączono z baza")
    })
    .catch((err) => {
        console.log("Nie można połączyć się z bazą " + err)
})
}